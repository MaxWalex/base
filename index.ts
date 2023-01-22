// let isBirthdayData:boolean = true;
// let ageData:number = 20;
// let userNameData:string = 'Max';

const userData = {
	isBirthday: true,
	age: 20,
	userName: 'Max',
	messages: {
		error: 'Error',
	}
}

const createError = (msg:string) => {
	throw new Error(msg);
}

const logBrtMsg = ({isBirthday, age, userName, messages:{error}}:{
	isBirthday:boolean,
	age:number,
	userName:string,
	messages:{error:string}
}):string => {    
    if (isBirthday) {
        return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
    } else {
        return createError(error);
    }
}

console.log(logBrtMsg(userData))