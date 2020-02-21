// let age: number;
// age = 30;
// const userName = 'Max';

// console.log(userName);

// import sum from './analytics'

const button = document.querySelector('button')!;

function clickhandler(message: string){
    console.log('Icarly' +message);
}

if(button){
    button.addEventListener('Click', clickhandler.bind(null, "You're welcome"));
    //{
        //console.log('I was clicked');
    //});
}


