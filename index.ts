// const test:null = null;

const test:number = null;
const test2:string = null;
const test4:undefined = undefined;
const test5:any = undefined;

function getRandomData() {
	if (Math.random() < 0.5) {
		return null;
	} else {
		return '   Some    ';
	}
}
const data = getRandomData()
const trimmedData = data ? data.trim() : null;