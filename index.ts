let isBirthdayData:boolean = true;
let ageData:number = 20;
let userNameData:string = 'Max';

const createError = (msg:string) => {
	throw new Error(msg);
}

const logBrtMsg = (isBirthday:boolean, age:number, userName:string):string => {    
    if (isBirthday === true) {
        return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
    } else if (isBirthday === false) {
        return 'Too bad';
    }
	
	return createError('Error');
}

logBrtMsg(isBirthdayData, ageData, userNameData)

// const smth:never = null