let card_listarray=[],id=1;
function handleAddClick(e)
{
    let textp=document.getElementById('textArea')
    let text=textp.value;


    let card_list=document.getElementById('card_list');
    let card = storeDataAndCreateCard(text);
    card_list.innerHTML = card
    textArea.value="";
}
function storeDataAndCreateCard(payload){
    // console.log(payload)
    let content = payload;
let obj={text:content,
            id:id++,
            isEditing: false};
        card_listarray.push(obj);

return createCardList(card_listarray)

function createCardList(card_listarray){
    let card_list_append='';
    card_listarray.forEach(function(card_data) {
        card_list_append = card_list_append + createCard(card_data)
        });

return card_list_append;       
    
}}

function createCard(payload){
    // let card_data=payload;
    let content=payload.text;
    let id=payload.id;
    let isEditing = payload.isEditing;
    
    if(!isEditing){

        return `<div class="card">
            <button class="cross" buttonid=id onclick="handlecross(${id})">X</button>
            <div class="content" id="content">${content}</div>
            <button class="edit" id="edit" onclick="handleEditClick(payload)" >Edit</button>
        </div>`}
    else
    {`<div class="edittext">
    <textarea cols="25px" rows="15px" id="textArea">
    <div class="content" id="content">${content}</div>
    </textarea>
        
    <button class="Save" type= "submit" onclick="handleSaveClick()">Add</button>
    </div>`}
    }
function handlecross(id)
{


    card_listarray=card_listarray.filter(function(item)
{
    return item.id!=id;

});
create_card_String='';
document.getElementById('card_list').innerHTML='';
createCard(card_listarray);
}

// function handlecross(id)

//  {  var crossbtn=document.getElementById("id");
//      alert('button  clicked'+ id)
   
//     alert(id);
    
     
//         Removes an element from the document
//         var element = document.getElementById(id);
//         card_listarray.splice(id,1);

//         return storeDataAndCreateCard(payload);
//     }

// var button = document.getElementById("buttonid");

//     console.log("button clicked");
//     button.removeEventListener("click",buttonClicked);

// }

// button.addEventListener("click", buttonClicked);



// var form=document.querySelector('#hogwarts-app');
// form.addEventListener('input', function(event){
//     console.log(event.target);
// },false);