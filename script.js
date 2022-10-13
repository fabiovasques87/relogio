let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//funcao para atualizar
updateClock=()=>{
    let now = new Date(); //pegar a data completa
    let hour = now.getHours(); //pega a o hora
    let minute = now.getMinutes(); //pega os minutos
    let second = now.getSeconds(); //pega os segundos

    //Inserir a hora no digital
    digitalElement.innerHTML=`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

//colocar o zero antes do digito quando for menor que 10
fixZero=(time)=>{
    if(time < 10){
        return '0'+time;
    }else{
        return time;
    }

    //mesma funcao resumida
    //return time < 10 ? `0${time}` : time;
}




//setar o tempo que ira atualizar a hora
setInterval(updateClock,1000);
