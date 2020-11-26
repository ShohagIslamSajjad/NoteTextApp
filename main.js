 const btn = document.querySelector("button")
 const input = document.querySelector("input")
 const store = document.querySelector(".divStore")
 let userArray= [];
console.log(userArray)
btn.addEventListener("click",()=>{
    const inputValue = input.value.trim();
    const html1 = `
   <div style = "background-color:white;border-radius"5px;">
   <small style="font-size:8px;" class="text-primary" >${new Date()}</small>
   <pre>${inputValue} <a href ="#"> <span class="span1">Delete</span></a></pre>
  
   </div><br> `
   store.insertAdjacentHTML("afterbegin", html1);
  input.value=""

store.addEventListener("click", (w)=>{
    if(w.target.classList.contains("span1")){
        w.target.parentElement.parentElement.parentElement.remove()

    }
  
})


userArray.push(inputValue)
console.log(userArray)
const userArray1 = ["hello"]
localStorage.setItem("saveData", JSON.stringify(userArray));

})

const backData = JSON.parse(localStorage.getItem("saveData"))
console.log("back",backData)
// console.log(backData)
  userArray = backData;
  console.log(backData)
  backData.forEach((loop)=>{
      console.log(loop)
     const html2 = `
    <div style = "background-color:white;border-radius"5px;">
    <small style="font-size:8px;" class="text-primary" >${new Date()}</small>
   <pre>${loop} <a href ="#"> <span class="span1">Delete</span></a></pre>
  
   </div><br> `
    store.insertAdjacentHTML("afterbegin", html2)

 })








// var deleteLinks = document.querySelectorAll('.delete');

// for (var i = 0; i < deleteLinks.length; i++) {
//   deleteLinks[i].addEventListener('click', function(event) {
//       event.preventDefault();

//       var choice = confirm(this.getAttribute('data-confirm'));

//       if (choice) {
//         window.location.href = this.getAttribute('href');
//       }
//   });
// }