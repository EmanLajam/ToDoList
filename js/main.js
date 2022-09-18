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
let time = (new Date()).toString().split(' ').splice(1, 3).join(' ');
// This is the array that will hold the todo list items

let ListItems;
if (localStorage.task != null) {
  ListItems = JSON.parse(localStorage.task)

} else {
  ListItems = [];
}


document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let newTask = {
    text: input.value,
    checked: "unchecked",
    id: Date.now(),
  }

  if (input.value == "") {
    error.innerHTML = 'must not null';

  } else {
    ListItems.push(newTask);
    localStorage.setItem('task', JSON.stringify(ListItems))
    console.log(ListItems)
  }
  showData();

});



$('body').on( 'click','.checkbox',function (e) {
  let taskId = (e.target.id);
  ListItems.forEach((element, index) => {
    
    if (element.id == taskId) {
      if ($(`#${taskId}`).is(':checked'))  {
        ListItems[index].checked = "checked";
      }else{
        ListItems[index].checked = "unchecked";
      } 
    }
  })
  localStorage.setItem('task', JSON.stringify(ListItems))
});


function showData() {

  let list = '';
  for (let i = 0; i < ListItems.length; i++) {

    list += `
    <li
    class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
    <div class="d-flex align-items-center">
      <input id="${ListItems[i].id}" ${ListItems[i].checked} class=" checkbox form-check-input me-2" type="checkbox" value="" aria-label="..." />
      <div>${ListItems[i].text}</div>
      <div>${time}</div>
    </div>

    <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
    <i class="fa-regular fa-pen-to-square"></i>
      <i class="fas fa-times text-primary"></i>
    </a>
  </li>
    `;

  }


  document.getElementById('list').innerHTML = list;
  document.getElementById('input').value = "";
  console.log(localStorage);
}
