var firebaseConfig = {
    apiKey: "AIzaSyBc4-qYuQfUJusvm_N98cJ4VfdfskYxQFU",
    authDomain: "kwitter-a2c62.firebaseapp.com",
    databaseURL: "https://kwitter-a2c62-default-rtdb.firebaseio.com",
    projectId: "kwitter-a2c62",
    storageBucket: "kwitter-a2c62.appspot.com",
    messagingSenderId: "1092937444688",
    appId: "1:1092937444688:web:2207db14c544d8bb329055"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

}