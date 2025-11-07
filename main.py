from dotenv import load_dotenv
from pydantic import BaseModel
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import PydanticOutputParser
from langchain.agents import create_tool_calling_agent, AgentExecutor
from tools import search_tool, wiki_tool, save_tool

load_dotenv()
from dotenv import load_dotenv
import os

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")

from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4o", api_key=openai_api_key)


class ResearchResponse(BaseModel):
    topic: str
    summary: str
    sources: list[str]
    tools_used: list[str]

llm = ChatOpenAI(model="gpt-4o-mini")
parser = PydanticOutputParser(pydantic_object=ResearchResponse)

prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
            You are a research assistant that will help generate a research paper.
            Answer the user query and use neccessary tools.
            Wrap the output in this format and provide no other text\n{format_instructions}
            """,
        ),
        ("placeholder", "{chat_history}"),
        ("human", "{query}"),
        ("placeholder", "{agent_scratchpad}"),
    ]
).partial(format_instructions=parser.get_format_instructions())

tools = [search_tool, wiki_tool, save_tool]
agent = create_tool_calling_agent(
    llm=llm,
    prompt=prompt,
    tools=tools
)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
query = input("What can i help you research? ")
raw_response = agent_executor.invoke({"query": query})

try:
    # Ensure raw_response is a dict and "output" exists
    if isinstance(raw_response, dict) and "output" in raw_response:
        output = raw_response["output"]
       
        # If output is a list, try to parse the first item
        if isinstance(output, list) and len(output) > 0 and isinstance(output[0], dict) and "text" in output[0]:
            structured_response = parser.parse(output[0]["text"])
       
        # If output is a string, parse it directly
        elif isinstance(output, str):
            structured_response = parser.parse(output)
       
        else:
            raise ValueError(f"Unexpected output format: {output}")

        print(structured_response)

    else:
        raise ValueError(f"raw_response missing 'output' key or is not a dict: {raw_response}")

except Exception as e:
    print("Error parsing response:", e)

print("Raw Response -", raw_response)
