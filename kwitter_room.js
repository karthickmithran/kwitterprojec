
  //ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
  apiKey: "AIzaSyBFcf8Yz4wwql6hLXoRyfERbbBM5uEvhi8",
  authDomain: "kwitterproject-f0061.firebaseapp.com",
  databaseURL: "https://kwitterproject-f0061-default-rtdb.firebaseio.com/",
  projectId: "kwitterproject-f0061",
  storageBucket: "kwitterproject-f0061.appspot.com",
  messagingSenderId: "923150440859",
  appId: "1:923150440859:web:94d9ba52dad8fa0cc1693e"
};
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addroom(){
  
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
  }

  function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location="kwitter_page.html";
    
  }


//user_name=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
row = "<div class='room_name'id="+Room_names+"onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
//End code
});});}
getData()
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}


