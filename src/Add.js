import React from "react";
import './App.css';

function Add() {
    function Add(){
        var MainDiv = document.getElementById('todo-list');
        var input = document.getElementById('text');
        var NewDiv = document.createElement('div');
        NewDiv.className = 'new-div'
        var Text = document.createElement('div');
        Text.className = 'txt';
        var Controls = document.createElement('div');
        Controls.className='controls';

        var x = input.value;

        
        var DelBtn = document.createElement('button');
        DelBtn.className = 'del-btn';
        DelBtn.innerHTML = '<i class="material-icons">delete</i>';
        Controls.appendChild(DelBtn);
        
        var CheckBtn = document.createElement('button');
        CheckBtn.className = 'check-btn';
        CheckBtn.innerHTML = '<i class="material-icons">check</i>';
        Controls.appendChild(CheckBtn);
        
        var Priority = document.createElement('p');
        Controls.appendChild(Priority);
        
        if (x.includes('p1')){
            Text.innerText = x.replace(' p1', '');
            Priority.innerText = 'P1';
            Priority.style.color = 'red';
            Priority.style.fontWeight = 'bold';
            Priority.style.fontSize = '20px';
        } else if (x.includes('p2')) {
            Text.innerText = x.replace(' p2', '');
            Priority.innerText = 'P2';
            Priority.style.color = 'orange';
            Priority.style.fontWeight = 'bold';
            Priority.style.fontSize = '20px';
        } else if (x.includes('p3')) {
            Text.innerText = x.replace(' p3', '');
            Priority.innerText = 'P3';
            Priority.style.color = 'blue';
            Priority.style.fontWeight = 'bold';
            Priority.style.fontSize = '20px';
        } else {
            Text.innerText = x;
            Priority.innerText = 'P4';
            Priority.style.fontWeight = 'bold';
            Priority.style.fontSize = '20px';
        }


        NewDiv.appendChild(Text);
        NewDiv.appendChild(Controls);
        MainDiv.appendChild(NewDiv);

        CheckBtn.onclick = function (){
            var Div = this.parentElement;
            var MainDiv = Div.parentElement;
            MainDiv.style.textDecoration = 'line-through';
            MainDiv.style.color = 'gray';
        };
        DelBtn.onclick = function (){
            var Div = this.parentElement;
            var MainDiv = Div.parentElement;
            MainDiv.style.display= 'none';
        };
    }

    function instructions(){
        console.log('Intstructions currently not available');
    }


    return(
        <div id="add">

        <form>
          <input type="text" id='text'/>
        </form>
        <div><button id='add-btn' onClick={Add}><i className="material-icons">add</i></button></div>
        <div><button id='add-btn' onClick={instructions}><i className="material-icons">rule</i></button></div>


      </div>
    );
}

export default Add;