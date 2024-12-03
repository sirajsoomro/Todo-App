let textplace = document.getElementById('textplace');
let loopDiv = document.getElementById('loopContainer');
let butnDlt = document.getElementById('del');
let addbutton = document.getElementById('addbutton');
let array = [];
let trash = [];

function func() {
    if (textplace.value.length > 0) {
        array.push(textplace.value);
        printArray()
        textplace.value = '';
    }
    else if (textplace.value == '') {
        alert('please Enter a text item');
    };
};

function dltbtn(id) {  
    const deletedTodo = array.splice(id,1);
    console.log('deleted' , deletedTodo);
    console.log(array);
    printArray();
};

function printArray() {
    loopDiv.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        loopDiv.innerHTML +=
        `  
        <div id='${i}'>          
        <div  class="flex my-1 justify-between px-1 justify-items-center bg-sky-300 rounded py-2">
            ${array[i]}
            <button onclick="dltbtn(${i})" class="bg-white rounded p-2">delete</button>
        </div>
        </div>
        `;
    };
};


let detafirst = [{
   addText : addbutton,
   removeButn : butnDlt
}];

localStorage.getItem('addText' , 'addbutton');