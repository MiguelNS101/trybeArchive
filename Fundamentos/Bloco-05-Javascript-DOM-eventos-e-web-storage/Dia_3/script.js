function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
createDaysOfTheWeek();
  
// Escreva seu código abaixo.

function att1() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    let feriado = [24, 25, 31];
    let finalDeSem = [4, 11, 18,  25];
    for (let i = 0; i < dezDaysList.length; i += 1) {
        let x = document.querySelector('#days');
        let createNumber = document.createElement('li');
        createNumber.innerText = dezDaysList[i];
        createNumber.className = 'day'
        for (let index = 0; index < feriado.length; index += 1) {
            if(dezDaysList[i] === feriado[index]){
                createNumber.className += ' holiday';
            }
        }
        for (let index = 0; index < finalDeSem.length; index += 1) {
            if(dezDaysList[i] === finalDeSem[index]){
                createNumber.className += ' friday';
            }
        }
        x.appendChild(createNumber);
    }
}
att1()

function att2(button1) {
    let x = document.querySelector('.buttons-container');
    let newButton = document.createElement('button')
    let newID = 'btn-holiday';
    newButton.innerHTML = button1;
    newButton.id = newID;
    x.appendChild(newButton);
}
att2('Feriados')

function att3() {
    let getHB = document.querySelector('#btn-holiday');
    let getH = document.querySelectorAll('.holiday')
    let bgColor = 'rgb(238,238,238)';
    let nColor = 'blue';
    getHB.addEventListener('click', function() {
        for (let index = 0; index < getH.length; index += 1) {
            if (getH[index].style.backgroundColor === nColor) {
                getH[index].style.backgroundColor = bgColor;
            } else {
                getH[index].style.backgroundColor = nColor;
            }
        }
    })
}
att3()

function att4(buttonName) {
    let x = document.querySelector('.buttons-container');
    let buttonID = 'btn-friday';
    let newButtonFry = document.createElement('button')
    newButtonFry.innerHTML = buttonName;
    newButtonFry.id = buttonID;
    x.appendChild(newButtonFry);
}
att4('Sexta-feira')

function att5() {
    let getFB = document.querySelector('#btn-friday');
    let getF = document.getElementsByClassName('friday');
    let newText = 'Sexta';
    let sextaFeira = [4, 11, 18,  25];
    getFB.addEventListener('click', function() {
        for (let index = 0; index < getF.length; index += 1) {
            if (getF[index].innerHTML === newText) {
                getF[index].innerHTML = sextaFeira[index];
            } else {
                getF[index].innerHTML = newText;
            }
        }
    })
}
att5();

function att6() {
    let dias = document.querySelector('#days');

    dias.addEventListener('mouseover', function(event) {
        event.target.style.fontSize = '50px';
        event.target.style.fontWeight = '5';
    })
}

function att62() {
    let dias = document.querySelector('#days');

    dias.addEventListener('mouseout', function(event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '1';
    })
}

att6()
att62()

function att7(tarefa) {
    let x = document.querySelector('.my-tasks');
    let newTarefa = document.createElement('span')
    newTarefa.innerHTML = tarefa;
    x.appendChild(newTarefa);
}
att7('cozinhar')

function att8(cor) {
    let x = document.querySelector('.my-tasks');
    let newDivTask = document.createElement('div');
    newDivTask.className = 'task' ;
    newDivTask.style.backgroundColor = cor;
    x.appendChild(newDivTask);
}
att8('blue')

function att9() {
    let x = document.querySelector('.task');
    let task = document.getElementsByClassName('task selected');

    x.addEventListener('click', function(event) {
        if (task.length === 0) {
          event.target.className = 'task selected';
        } else {
          event.target.className = 'task';
        }
    });
};
att9()

function att10() {
    let dias = document.querySelectorAll('.day');
    let task = document.querySelector('.task');
    let cor = task.style.backgroundColor;
    let bgColor = 'rgb(119,119,119)'
    for(let index = 0; index < dias.length; index += 1) {
        dias[index].addEventListener('click', function(event) {
            if (dias[index].style.color === cor) {
                dias[index].style.color = bgColor;
            } else {
                dias[index].style.color = cor;
            }
        })
    }
}
att10()