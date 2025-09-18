const form = document.querySelector('.container form');
const inputs = document.querySelectorAll('.container form input');
const error = document.querySelectorAll('.container form .error-text');
const radios = document.querySelectorAll('input[type="radio"]');
const message = document.querySelector('.container form textarea');
const success = document.querySelector('.success');
const queryError = document.querySelector('.query-error');
const consent = document.querySelector('input[type="checkbox"]');





// form validation function

form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    inputs.forEach((input) => {
        if(!input.value){
            input.parentElement.classList.add('error');
        }
        else{
            input.parentElement.classList.remove('error');

            if('input[type="email"]'){
                if(validateEmail(input.value)){
                    input.parentElement.classList.remove('error');
                    input.nextElementSibling.classList.remove('error');
                }
                else{
                    input.nextElementSibling.classList.add('error');
                }
            }
        }
    });

    
    // function to validate if consent button is checked
    if(consent.checked){
        consent.parentElement.classList.remove('error');
    }
    else{
        consent.parentElement.classList.add('error');
        // message.parentElement.classList.remove('error');
    }

        //textarea validation 
        if(!message.value){
            message.parentElement.classList.add('error');
        }
        else{
            message.parentElement.classList.remove('error');
        }


        // function to validate if query type button is checked
            let valid = false;

            radios.forEach((radio) => {
                if(radio.checked){
                    valid = true;
                }
            })

            if(valid){
                // alert("validation successful");
                queryError.style.display = "none";
                return true;
            }
            else{
                queryError.style.display = "block";
                // alert("invalid");
                return false;
            }


});
            

// function to validate if correct email pattern is used

function validateEmail(email){
    const regex = /^([a-zA-z0-9\._])+@([a-zA-Z])+.([a-z])+([\.a-z]+)?$/g;
    return regex.test(String(email).toLowerCase());
}



// function queryType(){
    
//     // let valid = false;

//             radios.forEach((radio) => {
//                 if(radio.checked){
//                     // valid = true;
//                 }

//                 if(valid){
//                     queryError.style.display = "none";
//                     // return true;
//                 }
//                 else{
//                     queryError.style.display = "block";
//                     // return false;
//                 }

//         });
// }

