// Get All Data
var inputBox   =  document.getElementById("getData");
var addBtn     =  document.getElementById("addBtn");
var addBtn1    =  document.getElementById("addBtn1");
var todoList   =  document.getElementById("todoList");
var pendingNum = document.getElementById("pendingTasks");
var deleteAllBtn = document.getElementById("clearBtn");
var userData ;
var listArray ;
 var currentIndex = 0;
if(localStorage.getItem("myTodo") != null){
    listArray = JSON.parse(localStorage.getItem("myTodo"));
    showTask();
}
else{
    listArray = [];
}
inputBox.onkeyup=()=>{
   userData =  inputBox.value;
 // console.log(userData);
  if(userData.trim() !=0){
      addBtn.classList.add("active");
      addBtn1.classList.add("active")
  }else{
    addBtn.classList.remove("active");
    addBtn1.classList.remove("active")
  }
}

addBtn.onclick=()=>{
      listArray.push(userData);
      localStorage.setItem("myTodo" , JSON.stringify(listArray));
      console.log(listArray);
      showTask();
      clearBtn();
}

addBtn1.onclick =()=>{
    listArray[currentIndex]=inputBox.value;
        localStorage.setItem("myTodo", JSON.stringify(listArray)); //transforming js object into a json string
        showTask(); //calling showTask function
        addBtn.classList.remove("active");
        clearBtn();
}


function showTask(){
 
    // show length of Array
  pendingNum.innerHTML =  listArray.length ;

  if(listArray.length > 0){ //if array length is greater than 0
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }

    var retriveData = ``;
    for(var i = 0 ; i < listArray.length ; i++){
        retriveData+=`<li>  ${listArray[i]}
                <span class="icon" ><i onclick="deleteData(${i})" class="fas fa-trash"></i></span>
                </li> `;
    }
    todoList.innerHTML = retriveData;
}


function deleteData(indexArray){
    listArray.splice(indexArray , 1);
    localStorage.setItem("myTodo" , JSON.stringify(listArray));
    showTask();
}

deleteAllBtn.onclick=()=>{
    listArray=[];
    localStorage.setItem("myTodo" , JSON.stringify(listArray));
    showTask();
}

function clearBtn(){
    inputBox.value = "";
}


