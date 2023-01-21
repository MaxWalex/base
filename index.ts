let isBirthdayData:boolean = true;
let ageData:number = 20;
let userNameData:string = 'Max';

// function logBrtMsg(isBirthday:boolean, age:number, userName:string):string {    
//     if (isBirthday) {
//         return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
//     } else {
//         return 'Error';
//     }
// }

const logBrtMsg = (isBirthday:boolean, age:number, userName:string):string => {    
    if (isBirthday) {
        return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
    } else {
        return 'Error';
    }
}

logBrtMsg(isBirthdayData, ageData, userNameData)