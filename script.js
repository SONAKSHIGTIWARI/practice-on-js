const form = document.getElementById('registration-form');
        const errorMessage = document.getElementById('error-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let errorText = '';
            const name = document.getElementById('student-name').value;
            const studentId = document.getElementById('student-id').value;
            const email = document.getElementById('email').value;
            const elective = document.getElementById('elective').value;

            if (!name || !studentId || !email || !elective) {
                errorText = 'All fields are required!';
            }

            if (errorText) {
                errorMessage.textContent = errorText;
            } else {
                errorMessage.textContent = '';
                alert('Registration Successful!');
                // Here you could send the data to the server using fetch or an AJAX request
            }
        });
