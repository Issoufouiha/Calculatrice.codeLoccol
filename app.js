//////////////////////////Manupulation Toogole////////////////////////////////////////////////////////////////
/////delete autre toogole////////
let myToogole1 = document.querySelector('.toogole1');
let myToogole2 = document.querySelector('.toogole2');
let myToogole3 = document.querySelector('.toogole3');
let myBtn1 = document.querySelectorAll('.btn1');
let myBtn2 = document.querySelectorAll('.btn2');
let myBtn3 = document.querySelectorAll('.btn3');
let myBtn4 = document.querySelectorAll('.btn4');
let myInput = document.querySelector('.my-input');
let myTitle1 = document.querySelectorAll('.titre1')
let myTitle2 = document.querySelectorAll('.titre2')
let myTitle3 = document.querySelectorAll('.titre3')
let bgBody = document.querySelector('body');
let myElement3 = document.querySelector('.element3');
let myElementToogole = document.querySelector('.ensembleToogole')
console.log(myToogole1);

////////////////////////// mouvement toogole   ////////////////////////
myToogole1.addEventListener('click', function() {
    myTitle1.forEach(element => {
        element.setAttribute("id", "changeTitle")
    });
    myTitle2.forEach(element => {
        element.setAttribute("id", "changeTitle")
    });
    myTitle3.forEach(element => {
        element.setAttribute("id", "changeTitle")
    });
    myToogole1.classList.add('mouvToogole');
    bgBody.classList.add('color1Body');
    myInput.classList.add('changeColorInput1');
    myElement3.classList.add('changeColorElement3');
    myElementToogole.classList.add('changeColorElement3');
    myToogole3.setAttribute("id","changeColorElement3");
    myToogole2.setAttribute("id","changeColorElement3");
/////////////// Mettre le box shadows à tous mes bouton////////////////
    myBtn1.forEach(element => {
        element.setAttribute("id","Changebtn1");
    });
});
myToogole3.addEventListener('click', function() {
    myTitle1.forEach(element => {
        element.removeAttribute("id", "changeTitle")
    });
    myTitle2.forEach(element => {
        element.removeAttribute("id", "changeTitle")
    });
    myTitle3.forEach(element => {
        element.removeAttribute("id", "changeTitle")
    });


    myTitle1.forEach(element => {
        element.setAttribute("id", "changeTitle1")
    });
    myTitle2.forEach(element => {
        element.setAttribute("id", "changeTitle1")
    });
    myTitle3.forEach(element => {
        element.setAttribute("id", "changeTitle1")
    });
    myBtn2.forEach(element =>{
        element.setAttribute("id", "Change1btn2")
    })
    myBtn3.forEach(element =>{
        element.setAttribute("id", "Change1btn2")
    })
    myBtn4.forEach(element =>{
        element.setAttribute("id", "Change1btn4")
    })


    bgBody.classList.add('color2Body');
    myInput.classList.add('changeColorInput2');
    myElement3.setAttribute("id","changeColor1Element3");
    myToogole3.removeAttribute('id')
    myToogole3.classList.add('mouvToogole1');
    myToogole1.setAttribute("id","addToogole");
    myToogole2.setAttribute("id","changeColorElement3");
    myToogole1.setAttribute("id","changeColorElement3");
    myBtn1.forEach(element => {
        element.removeAttribute("id","Changebtn1");
        element.setAttribute("id","Change1btn1")
        
    });

    
});
myToogole2.addEventListener('click', function() {
    myToogole1.classList.add('mouvToogole');

    
})
//////////////////////////// Faire Apparetre à chaque clique///////////////////////////////////////////
let allBtn = document.querySelectorAll('button[name ="btn"]') 

console.log(allBtn);


        //fonction qui évalue le chiffre et renvoie la sortie
         function calculer() 
         { 
             let a = document.querySelector(".my-input").value 
             let b = eval(a) 
             document.querySelector(".my-input").value = b 
         } 
         //fonction qui affiche la valeur
         function afficher(val) 
         { 
             document.querySelector(".my-input").value+=val 
         } 
         //fonction qui efface l'écran 
         function effacer() 
         { 
             document.querySelector(".my-input").value = "" 
         } 
