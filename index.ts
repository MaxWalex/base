let msg:'Hello' = 'Hello';

msg = 'Hello';

const port3000:number = 3000;
const port3001:number = 3001;

function startServer(
		protocol: 'http' | 'https', 
		port: 3000 | 3001
	):'Server start' {

		if (port === port3000 || port === port3001) {
			console.log(`Server start on ${protocol}://server:${port}`)
		} else {
			console.error('Invalid port');
		}

	return 'Server start';
}

startServer('https', 3001);

function createAnimation(
		id:string | number, 
		animationName:string, 
		timingFunc:'ease' | 'ease-out' | 'ease-in' = 'ease',
		duration:number,
		iterCount:'infinite' | number
	):void {

	// const elem = document.querySelector(`#${id}`) as HTMLElement;

	// if (elem) {
		console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`)
		// elem.style.animation = `${animationName} ${timingFunc} ${duration} ${iterCount}`;
	// }
}

createAnimation('id', 'fade', "ease-in", 1000, 1)