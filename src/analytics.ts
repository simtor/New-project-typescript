//console.log('Sending...');
//const userName = 'Max';
// const sum =(num1: number, num2: number):number => num1 + num2;
// export default sum;

let logged;

function sendAanalytics(data: string){
    console.log(data);
    logged = true;
    //console.log(logged);
}

sendAanalytics('The data')
