const userData = {
	isBirthday: true,
	age: 20,
	userName: 'Max',
	messages: {
		error: 'Error',
	}
}

const userDataTuple:[boolean, number, ...string[]] = [true, 40, "John", 'Max', 'Alex']
// userDataTuple[3]
// userDataTuple.push(50)
// userDataTuple[3]

const res = userDataTuple.map((t) => `${t} - data`)

const [bthd, age, userName] = userDataTuple;

console.log(res)

// const createError = (msg:string) => {
// 	throw new Error(msg);
// }

// const logBrtMsg = ({isBirthday, age, userName, messages:{error}}:{
// 	isBirthday:boolean,
// 	age:number,
// 	userName:string,
// 	messages:{error:string}
// }):string => {    
//     if (isBirthday) {
//         return `Congrats ${userName.toLocaleUpperCase()}, age: ${age + 1}`;
//     } else {
//         return createError(error);
//     }
// }

// console.log(logBrtMsg(userData))

// const departments:string[] = ['dev', 'design', 'marketing']

// const department = departments[0]

// // departments.push(5);
// const report = departments	
// 						.filter((d:string) => d !== 'dev')
// 						.map((d:string) => `${d} - done`)

// const nums:number[][] = [[1, 2, 3], [1, 2, 3]]

// const [first, second] = report;
// console.log(first, second)