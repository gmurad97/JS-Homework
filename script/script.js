function loginAuth() {
    let authName = document.getElementById("authname").value;
    let authSurname = document.getElementById("authsurname").value;

    if (authName !== "" && authSurname !== "") {
        document.getElementsByClassName("success-auth-bar")[0].style.left = "0px";
        document.getElementsByTagName("p")[1].innerHTML = `Name: ${authName}`;
        document.getElementsByTagName("p")[2].innerHTML = `Surname: ${authSurname}`;
    }
}

function clearTextBox() {
    document.getElementById("authname").value = "";
    document.getElementById("authsurname").value = "";
}

function barClose() {
    document.getElementsByClassName("success-auth-bar")[0].style.left = "-30%";
}