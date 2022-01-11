const form = document.querySelector('form');
const mailInput = document.querySelector('[name = "email"]');
const messageInput = document.querySelector('[name = "message"]');


form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

const data = {};

onReload();

function onInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}

function onReload() {
    try {
        const loadedData = JSON.parse(localStorage.getItem("feedback-form-state"))
        if (loadedData.email) {
            mailInput.value = loadedData.email;
        }
        
        if (loadedData.message) {
            messageInput.value = loadedData.message;
        }

        Object.assign(data, loadedData);
    } catch (error) {
        console.log('Надо что-то написать сначала')
    }

}

function onSubmit(evt) {
    evt.preventDefault();

    localStorage.removeItem("feedback-form-state");
    console.log(data);

    evt.target.reset();
}


