function postToGoogle() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var messege = document.getElementById("messege").value;
    $.ajax({
        url : "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZwySuiDKFZxEvgEG7kIUQo9SXr5nf52Bgn4D3nHs8lQvjEA/formResponse",
        data : {"entry.612262960":name,"entry.2088890865":email,"entry.1353541107":messege},
        type : "post",
        dataType : "xml",
        success:function(res){
            console.log(res);
        }
    });
    return false;
}

