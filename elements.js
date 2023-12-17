  function validateForm() {
            var subject = document.getElementById('subject').value.trim();
            var email = document.getElementById('email').value.trim();

            if (subject === '' || email === '') {
                alert('Subject and Email are required');
                return false; // Prevent form submission
            }

            return true; // Allow form submission
        }
//year
class YearElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = new Date().getFullYear();
   }
}

customElements.define("x-fullyear", YearElement);