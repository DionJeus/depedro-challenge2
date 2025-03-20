const input = document.getElementById("email");
const sub = document.getElementById("sub");
const errorText = document.getElementById("error");
const panel = document.getElementById("panel");
const success = document.getElementById("success");
const emailTxt = document.getElementById("email-txt");
const dismiss = document.getElementById('dismiss');

const regex = /^^\w+([.-]?\w+)@\w+([.-]?\w+)(\w{2,3})+$/;

dismiss.addEventListener("click", () => {
    success.classList.remove('success')
    success.classList.add("none")
    panel.classList.remove("none")
    panel.classList.add("panel")
    input.value="";

})

sub.addEventListener("click", () => {
    ValidateEmail(input.value)
})


function ValidateEmail(mail) {
    if (regex.test(mail)) {

        if (input.classList = "email-error") {
            errorText.classList.remove('error-txt')
            errorText.classList.add('none')

            input.classList.remove('email-error')
            input.classList.add('email')

        }
        panel.classList.remove("panel")
        panel.classList.add("none")
        success.classList.remove('none')
        success.classList.add("success")
        emailTxt.innerHTML = input.value;
        return (true)
    } else {
        errorText.classList.remove('none')
        errorText.classList.add('error-txt')

        input.classList.remove('email')
        input.classList.add('email-error')
    }
}