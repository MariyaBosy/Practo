

// let data = [];

let id = 0;
// var i = 1;

function insertcard() {
  
  var text = document.getElementById("text").value;
  document.getElementById("text").value =" ";
  
  let obj = {
    text,
    id: id + 1
  };

    createcard(obj);
}
   

function createcard(obj)
{

const div = document.createElement('div');
const h4 = document.createElement('h4');
var removeButton = document.createElement("BUTTON");
var editButton= document.createElement("BUTTON");
const parent = document.getElementById("parent");

  parent.append(div);
  div.append(h4);
  div.append(removeButton);
  div.append(editButton);

  div.setAttribute('class','card');
  // div.setAttribute('id','card');
  removeButton.setAttribute('id','close');
  editButton.setAttribute('id','edit');
 
  h4.innerHTML=obj.text;
  removeButton.innerHTML = "X";
 editButton.innerHTML="Edit";

  removeButton.onclick = function close() {
    div.remove()
  }

editButton.onclick = function edit(){
  // const textarea = document.createElement("textarea");
  // if(editButton.innerText='Edit'){
  //   textarea.setAttribute('id','edittext');
  //   parent.append(textarea);
  //   textarea.innerHTML=obj.text;
  //   var editedtext = document.getElementById("edittext").value;
  //   editButton.innerHTML='Save'
  // }
  
  // else {
  //   editButton.innerText = 'Edit';
  //   h4.innerHTML=editedtext;
  //   textarea.remove();
  // }
 
  
  
  // textarea.innerHTML=obj.text;
  // document.getElementById("edittext").value = "Save";
  const text = h4.innerText;
  const textArea = document.createElement('textarea');
  if (editButton.innerText === 'Save'){
    div.append(textArea);
    h4.remove();
    editButton.innerText = 'Edit';
  }else{
    const textAreaInput = textArea.innerText();
    const h4 = document.createElement('h4');
    h4.innerText = textAreaInput;
    div.append(h4);
    
  }

}  


}




  // data.push(obj);
  // console.log(data);

  // const createcard = function (card) {
  //   body = document.querySelector('body');
  //   const div = document.createElement('div')
  //   const h4 = document.createElement('h4')
  //   h4.appendChild(document.createTextNode(text));

  //   body.append(div)
  //   div.append(h4)
    
  //   div.setAttribute('class', 'card')
  // };

  // data.forEach(function (card) {
  //   createcard(card)
  // })