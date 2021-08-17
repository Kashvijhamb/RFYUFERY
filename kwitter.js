function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

     if (user_name == "") {
         window.location = "index.html";
        }
        else if(user_name == " ")
        {
            window.location = "index.html"
        }
         else{
            window.location = "kwitter_room.html";
         }
        
     
}