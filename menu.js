let mdbtn = document.getElementById("model-btn");
let chi = document.getElementById("child");
let chi1 = document.getElementById("child1");
let closed = document.getElementById("close");
let chi2 = document.querySelector(".child2");


mdbtn.addEventListener("click",()=>{
    chi.style.display="none";
    chi1.style.display="flex";
    // chi2.style.display="block";
    // closed.style.display="flex";
    
});
closed.addEventListener("click",()=>{
    chi1.style.display="none";
    chi.style.display="flex";
})