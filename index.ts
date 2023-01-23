const message:string | number = 3;
const messages:string[] | number[] = ['a', 'b']

function printMsg(msg:string[] | number | boolean):void {
	if (Array.isArray(msg)) {
		msg.forEach((item:string) => console.log(item))
	} else if (typeof msg === 'number') {
		console.log(msg.toFixed())
	} else {
		console.log(msg)
	}

	console.log(msg)
}

printMsg(4)

const printReadings = (a:number[] | string) => {
	console.log(a.toString())
}

const checkReadings = (readings:{system:number} | {user:number}):void => {
	if ('system' in readings) {
		console.log(readings.system)
	} else {
		console.log(readings.user)
	}
}

function logValue(x:string | Date) {
	if (x instanceof Date) {
		console.log(x.getDate())
	} else {
		console.log(x.trim())
	}
}  