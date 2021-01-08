const form      = document.getElementById('to-do__form'); 
const listItems = document.getElementById('to-do-list__items');
const input     = document.getElementById('to-do__action');
var doneBtns,deleteBtns;

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const action    = input.value;
    if(action != "" &&
        action != null){
        input.value     = '';
        let listItem    = createListITem();
        let span        = createSpan(action);
        let doneBtnEl   = createDoneBtn();
        let deleteBtnEl = createDeleteBtn();
        listItem.append(span);
        listItem.append(doneBtnEl);
        listItem.append(deleteBtnEl);
        listItems.appendChild(listItem);
        doneBtns     = document.getElementsByClassName('doneBtn');
        deleteBtns   = document.getElementsByClassName('deleteBtn');
        // add event on done button
        for(doneBtn of doneBtns){
            doneBtn.addEventListener('click',function(){
                this.previousSibling.style.borderColor = "#03d203";
                this.previousSibling.style.color = "#03d203";
            })
        }
        // add event on delete button
        for(deleteBtn of deleteBtns){
            deleteBtn.addEventListener('click',function(){
                this.parentNode.remove();
            })
        }  
    }
});
// create li
function createListITem(){
    let listItem    = document.createElement('li');
    listItem.setAttribute('class','to-do-list__item');
    return listItem
}
// create span takes input value
function createSpan(action){
    let span = document.createElement('span');
    span.textContent = action;
    return span;
}
// create done button
function createDoneBtn(){
    let doneBtnEl = document.createElement('button');
    doneBtnEl.setAttribute('class','doneBtn');
    doneBtnEl.textContent = 'Done';
    return doneBtnEl;
}
// create delete button
function createDeleteBtn(){
    let deleteBtnEl = document.createElement('button');
    deleteBtnEl.setAttribute('class','deleteBtn');
    deleteBtnEl.textContent = 'Delete';
    return deleteBtnEl;
}