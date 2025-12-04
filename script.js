document.getElementById('demoForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.name.value;
            const email = this.email.value;
            const skill = this.skill.value;
            const workstyle = this.workstyle.value;
            
            // Show result
            document.getElementById('result').style.display = 'block';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                this.reset();
            }, 2000);
            
            // Hide result after 5 seconds
            setTimeout(() => {
                document.getElementById('result').style.display = 'none';
            }, 5000);
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });