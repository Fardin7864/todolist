document.querySelector('.btn-add').addEventListener('click', function (e){
    
    const inputFild = document.getElementById('input-fild');
    // console.log(inputFild.value);

    if (inputFild.value != '') {
        
    

    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'Delete'
    button.addEventListener('click',function(){
        li.remove();
    })
    li.innerText = inputFild.value + "  ";
    li.classList.add('item');
    li.appendChild(button);
   
    
    
document.querySelector('.list-container').appendChild(li);
    }
inputFild.value = '';


})