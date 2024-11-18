const singnupForm = document.querySelector('.singnup-form');
const allInput = singnupForm.querySelectorAll(".input");
const textarea = singnupForm.querySelector("textarea");
let allRegistrationData = [];

allRegistrationData = getAllData('allRegistrationData');

singnupForm.onsubmit = (e) =>{
    e.preventDefault();
    let checkEmail = allRegistrationData.filter((data)=>data.email == allInput[1].value);
    if(checkEmail.length == 0)
    {
        allRegistrationData.push({
            fullname : allInput[0].value,
            email : allInput[1].value,
            password : allInput[2].value,
            mobile : allInput[3].value,
            state : allInput[4].value,
            country : allInput[5].value,
            pincode : allInput[6].value,
            textarea : textarea.value
        });
        insertData ("allRegistrationData",JSON.stringify(allRegistrationData));
        swal("Data Inserted !","Please login !","success");
    }
    else
    {
        swal("User Allready exists !", "Please Login !","warning");
    }
}