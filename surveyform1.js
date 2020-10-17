function validateForm() {
    var x, y, z;
    x = document.forms["survey-form"]["name"].value;
    y = document.forms["survey-form"]["email"].value;
    z = document.forms["survey-form"]["number"].value;
    //throws an error if the name input isn't filled out.
    if (x === "") {
        alert("Name must be filled out");
    }//throws an error if the email isn't filled out.
    else if (y === "") {
        alert("Email must be filled out");
    }//throws an error if the number falls outside of the required range, also throws an error if a non-number is inputted.
    else if (z === "") {
        alert("Please enter your age");
    } else if (isNaN(z) || z < 10 || z > 100) {
        alert("Please enter an age number between 10 and 100");
    } return false;
}