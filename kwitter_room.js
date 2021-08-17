
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
