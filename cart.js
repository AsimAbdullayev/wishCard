let div = document.querySelector('.main')
let count=document.querySelector('.count')

function getApi(){
  div.innerHTML=``
  axios.get('https://672b4c10976a834dd0267ad0.mockapi.io/basket')
  .then((res) => {
    db = res.data;
     db.forEach((item) => {
    let box = document.createElement("div");
    box.style =
      "width:100px; height:150px; border: 1px solid black; margin:15px; padding:15px";
    box.innerHTML = `<p>${item.title}</p>
     <button onclick="deleteItem(${item.id})">Delete</button> 
    `;
    div.appendChild(box);
      });
  })                            
}


function deleteItem(id){
  axios.delete(`https://672b4c10976a834dd0267ad0.mockapi.io/basket/${id}`)
setTimeout(() => {

  getApi()
}, 2000);
}

window.onload=()=>{
  getApi()
}