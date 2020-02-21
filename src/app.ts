// let age: number;
// age = 30;
// const userName = 'Max';

// console.log(userName);

// import sum from './analytics'

let appId = 'abc';
const button = document.querySelector('button')!;


function add(n1: number, n2: number){
    if (n1 + n2 > 0){
        return n1 + n2;
    } 
    return; 
}

function clickhandler(message: string){
    //let userName = 'Max';
    console.log('Icarly' +message);
}

if(button){
    button.addEventListener('Click', clickhandler.bind(null, "You're welcome"));
    //{
        //console.log('I was clicked');
    //});
}


