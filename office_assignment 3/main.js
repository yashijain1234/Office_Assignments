display();
let name = document.getElementById("name");
let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    nameval = name.value;
    if(nameval.trim()!=0){
        let task = localStorage.getItem("localtask");
        if(task == null){
            taskObj = [];
        }
        else{
            taskObj = JSON.parse(task);
        }
        taskObj.push({'task_name':nameval, 'completeStatus':false});
    
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        name.value = '';
    }
    display();
})

// display
function display(){
    let task = localStorage.getItem("localtask");
    if(task == null){
        taskObj = [];
    }
    else{
        taskObj = JSON.parse(task);
    }
    let html = '';
    let myUL = document.getElementById("myUL");
    taskObj.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
        }else{
            taskCompleteValue = `<td>${item.task_name}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue}
                    <td><button type="button" onclick="edittask(${index})" <i class="fa fa-edit" ></i><br>Edit</button></td>
      
                    <td><button type="button"  onclick="deleteitem(${index})" <i class="fa fa-trash"></i><br>Delete</button></td>
                </tr>`;
    });
    myUL.innerHTML = html;
}

// edit the item
function edittask(index){
    let saveindex = document.getElementById("saveindex");
    let btn = document.getElementById("btn");
    let save = document.getElementById("save");
    saveindex.value = index;
    let task = localStorage.getItem("localtask");
    let taskObj = JSON.parse(task); 
    
    name.value = taskObj[index]['task_name'];
    btn.style.display="none";
    save.style.display="block";
}

//  save the current item
let save = document.getElementById("save");
save.addEventListener("click", function(){
    let btn = document.getElementById("btn");
    let task = localStorage.getItem("localtask");
    let taskObj = JSON.parse(task); 
    let saveindex = document.getElementById("saveindex").value;
    
    for (keys in taskObj[saveindex]) {
        if(keys == 'task_name'){
            taskObj[saveindex].task_name = name.value;
        }
      }
    // taskObj[saveindex] = {'task_name':name.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = name.value;
    save.style.display="none";
    btn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    name.value='';
    display();
})
// delete an existing item
function deleteitem(index){
    let task = localStorage.getItem("localtask");
    let taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    display();
}

// serachlist
let search = document.getElementById("search");
search.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchval = search.value;
        let re = new RegExp(searchval, 'gi');
        if(searchedtext.match(re)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})














