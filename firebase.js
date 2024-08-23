var firebaseConfig = {
    apiKey: "AIzaSyAve-VAJa3nBNv_nHZflmIzlZjx6Cyhmik",
    authDomain: "time2-903dc.firebaseapp.com",
    projectId: "time2-903dc",
    storageBucket: "time2-903dc.appspot.com",
    messagingSenderId: "35413566213",
    appId: "1:35413566213:web:6052cf351e6f3048bb4d6c",
    measurementId: "G-XCEPSJB6GC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
db.collection("comments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        addComment(doc.data().message);
    });
});

function addComment(message) {
    var newParagraph = document.createElement("p");
    newParagraph.textContent = message;
    var commentElement = document.querySelector('.comment');
    commentElement.appendChild(newParagraph);
}
