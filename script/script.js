// grabbing elements i need from the html

/* nav */

let about = document.getElementById("navabout");
let project = document.getElementById("navproject");
let contact = document.getElementById("navcontact");

/* icons */

let imgAbout = document.getElementById("imga");
let imgProject = document.getElementById("imgp");
let imgContact = document.getElementById("imgc");


about.addEventListener("mouseover", function () {
  imgAbout.style.visibility = "visible";
});

about.addEventListener("mouseout", function () {
  imgAbout.style.visibility = "hidden";
});

project.addEventListener("mouseover", function () {
  imgProject.style.visibility = "visible";
});
project.addEventListener("mouseout", function () {
  imgProject.style.visibility = "hidden";
});

contact.addEventListener("mouseover", function () {
  imgContact.style.visibility = "visible";
});
contact.addEventListener("mouseout", function () {
  imgContact.style.visibility = "hidden";
});

/* footer */

let footerImg = document.getElementById("footerimg");
let likes = document.getElementById("likes");


/* increasing likes */

let increaseLike = () => {
let count = parseInt(likes.innerHTML);
if(true){
    count+=1;
}
likes.innerHTML = count;
};

footerImg.addEventListener("click", increaseLike);
