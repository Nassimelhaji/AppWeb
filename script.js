function confirm(){
    let elem1 = document.getElementById("Nom").value;
    let elem2 = document.getElementById("Pwd").value;
    
    localStorage.setItem("user", elem1);
    localStorage.setItem("pwd", elem2);
}


