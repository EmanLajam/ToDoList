  //  const navbar = document.querySelector('.head');
  //  window.onscroll = () => {
  //      if (window.scrollY > 300) {
  //          navbar.classList.add('nav-active');
  //      } else {
  //          navbar.classList.remove('nav-active');
   //     }
 //   };


 //let AddBtn = document.getElementById("addBtn");
 //AddBtn.addEventListener('click', function onclick(){
 //   let list = document.createElement('ul');


// });


let input = document.getElementById("input");
let list = document.getElementById("list");
let AddBtn = document.getElementById("addBtn");
let error = document.getElementById("error");
// This is the array that will hold the todo list items

let ListItems;
if(localStorage.task != null){
    ListItems = JSON.parse(localStorage.task)

}else{
    ListItems = [];
}


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let newTask = {
    text:input.value,
    checked: false,
    id:Date.now(),
 }

if(input.value == ""){
    error.innerHTML = 'must not null';

 }else{
    ListItems.push(newTask);
localStorage.setItem('task', JSON.stringify(ListItems))
console.log(ListItems)
 }
showData();

});

    
    

function showData(){

    let list = '';
    for(let i = 0 ; i< ListItems.length; i++){
        
    list += `
    <li
    class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
    <div class="d-flex align-items-center">
      <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
      ${ListItems[i].text}
    </div>
    <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
      <i class="fas fa-times text-primary"></i>
    </a>
  </li>
    `;
    }
    document.getElementById('list').innerHTML = list;

    console.log(localStorage);
}
