const firstName = document.querySelector(".name");
const num = document.querySelector(".number");
const btn = document.querySelector(".btn");
let count, Fname;


btn.addEventListener("click", ()=>{
    count = parseInt(localStorage.getItem("streak")) || 0;
    count++;
    localStorage.setItem("streak", count);
    console.log("btn was clicked");
    // console.log(num)
    num.innerHTML = `<h1 class="number">${count}</h1>`;
})


window.onload = ()=>{

    Fname = localStorage.getItem("firstName");
    if(Fname == null ){
        Fname = prompt("Enter your first name");
        localStorage.setItem("firstName", Fname);
    }
    firstName.innerHTML = `<p class="name">Hi! ${Fname}</p>`;

    count = parseInt(localStorage.getItem("streak")) || 0;
    num.innerHTML = `<h1 class="number">${count}</h1>`;
}