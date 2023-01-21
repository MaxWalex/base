let isBirthdayData:boolean = true;
let ageData:number = 20;
let userNameData:string = 'Max';

let salary:number;
salary = 5000;

const userData = `{"isBirthdayData": true, "ageData": 40, "userNameData": "Max"}`;
const userObj: {
    isBirthdayData:boolean;
    ageData:number;
    userNameData:string;
} = JSON.parse(userData)
console.log(userObj)

function logBrtMsg(isBirthday:boolean, age:number, userName:string):string {    
    if (isBirthday) {
        return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
    } else {
        return 'Error';
    }
}

logBrtMsg(isBirthdayData, ageData, userNameData)