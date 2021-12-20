function imprimirData(){
    const container = document.querySelector('.container');
    const pHoraeData = document.createElement('p');
    pHoraeData.innerHTML = getDateText();
    container.appendChild(pHoraeData);
}

imprimirData();

function getDateText(){
    const date = new Date();
    const dateText = dateConverter(date);
    return dateText
}

function dateConverter(date){
    const day = date.getDay();
    const dayName = dayConverter(day)
    const dayNumber = date.getDate();
    dayNumber >= 10? dayNumber : `0${dayNumber}`;
    const month = date.getMonth() +1;
    const monthName = monthNumberConverter(month);
    const year = date.getFullYear();
    const hour = date.getHours();
    hour >= 10? hour : `0${hour}`;
    const minutes = date.getMinutes();
    minutes >= 10? minutes : `0${minutes}`;

    return `${dayName}, ${dayNumber} de ${monthName} de ${year}, ${hour}:${minutes}`;
}

function dayConverter(day){
    switch(day){
        case 1:
            return 'Segunda-feira'
        case 2:
            return 'Terça-feira' 
        case 3:
            return 'Quarta-feira'
        case 4:
            return 'Quinta-feira'
        case 5:
            return 'Sexta-feira'
        case 6:
            return 'Sábado'
        case 0:
            return 'Domingo'
    }
}

function monthNumberConverter (month){
    switch (month){
        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Março'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'

    }

    //============SOLUÇÃO ALTERNATIVA====================
    //const container = document.querySelector('.container');
    //const data = new Date();
    //container.innerHTML = data.toLocaleDataString('pt-BR'{dateStyle: 'Full', timeStyle: 'Short'})
}

