// select add buuton,popupoverlay,addbook
var popupoverlay = document.querySelector(".popup-overlay")
var addbook = document.querySelector(".add-book")
var addpopupbutton=document.getElementById("add-popup-button")


addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    addbook.style.display="block"
})
// select cancel button
var cancelbutton=document.getElementById("cancel-button")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
     popupoverlay.style.display="none"
     addbook.style.display="none"
})

// select container-box,book-title-input,book-author-input,book-description-input,add-button

var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
var addbutton=document.getElementById("add-button")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","container-box")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button id="delete-popup" onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
     addbook.style.display="none"
})

// select delete
var deletepopup=document.getElementById("delete-popup")
function deletebook(event){
    event.target.parentElement.remove()
}