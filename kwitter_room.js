const firebaseConfig = {
      apiKey: "AIzaSyA3vr_pULbItElybsUdqWVl0fELxUBlb1E",
      authDomain: "classtest-f7368.firebaseapp.com",
      databaseURL: "https://classtest-f7368-default-rtdb.firebaseio.com",
      projectId: "classtest-f7368",
      storageBucket: "classtest-f7368.appspot.com",
      messagingSenderId: "1015401061595",
      appId: "1:1015401061595:web:5b998dd9659e128de4c0fe",
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

      function addRoom() 
      {
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({ 
      purpose : "adding room name" 
      }); 
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html"; 
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });
});
}
getData();
function redirectToRoomName(name) 
{ 
console.log(name); 
localStorage.setItem("room_name", name); 
window.location = "kwitter_page.html"; 
}
