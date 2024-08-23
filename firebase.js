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
    var newParagraph = document.createElement("li");
    newParagraph.textContent = message;
    var commentElement = document.querySelector('.comment');
    commentElement.appendChild(newParagraph);
}
//function to add comment on database
function addCommentToDatabase(comment) {
    //var comment = document.getElementById("comment").value;
    db.collection("comments").add({
        message: comment
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            addComment(comment);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

// Seleciona o formulário
var form = document.getElementById('myForm');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function (event) {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();

    // Obtém os valores dos campos de entrada
    var comment = document.getElementById('comment').value;
    addCommentToDatabase(comment);

    form.reset();
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
});


document.addEventListener('DOMContentLoaded', (event) => {
    // Obtém o modal
    var modal = document.getElementById("myModal");

    // Obtém o elemento que fecha o modal
    var span = document.getElementById("closeModal");

    // Quando o usuário clica em <span> (x), fecha o modal
    span.onclick = function () {
        modal.style.display = "none";
        location.reload(); // Adicione esta linha

    }
    // Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
