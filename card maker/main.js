
  let data = [];

let id = 0;
var i = 1;

function insertcard() {
  var text = document.getElementById("text").value;
  $("#parent").append('<div id="child' + (i + 1) + '">' + text + '<button id="' + (i+1) + '" onclick="deleteThis(this)" >X</button></div>');
  i++;
}

function deleteThis(e)
{
  $("#child" + (e.id)).hide();
  console.log(e.id);
}
  // var text = document.getElementById("text").value;
  // let obj = {
  //   text,
  //   id: id + 1

  // data.push(obj);
  // const card = data[i];
  // i+1;
  



  

  // const createcard = function (card) {
  //   body = document.querySelector(body);
  //   const div = document.createElement('div')
  //   const h4 = document.createElement('h4')
  //   h4.appendChild(document.createTextNode(text));

  //   body.append(div)
  //   div.append(p)
    
  //   div.setAttribute('class', 'card')
  // };

  // data.forEach(function (card) {
  //   createcard(card)
  // })
