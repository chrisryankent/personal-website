let  to_do_list = [
    {
        name:'Movie',
        duedate:'22-03-2'
}];  
const MAX_TASKS = 1; 


render();

function render(){
    let toDoListHtml = '';
    
    for (let i = 0; i < to_do_list.length; i++) {
        const element = to_do_list[i];
        const {name,duedate}=element;
        const html = `
            <div class='items'><div>${name}</div> <div>${duedate}</div> <button class='btn btn-danger' onclick="to_do_list.splice(${i},1); render();">delete</button></div><br>`
        toDoListHtml += html;
    
    }
            
    let display = document.querySelector('.display-list');
    display.innerHTML = toDoListHtml;
    
    }
    
    
    function main() {
        let item = document.querySelector('.to-do').value;
        let item2 = document.querySelector('.to-do2').value;
        if(to_do_list.length <= MAX_TASKS){
            to_do_list.push({name:item,duedate:item2});
            render();
            console.log(to_do_list);
        }
       
        
        
    
    }