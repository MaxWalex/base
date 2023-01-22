const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate:number = 0.45;
const wRate:number = 2;

const monthPayments:number[] = [0, 0]; // [electricity, water]

const calculatePayments = (
	{mode, readings}:{mode:string,readings:number}, 
	wData:{readings:number}, 
	elRate:number, 
	wRate:number):void => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (
	[el, water]:number[], 
	{units, readings}:{units:string,readings:number},
	wData:{readings:number, units:string}):string => {

	const text:string = `    Hello!
    This month you used ${readings} ${units} of electricity
    It will cost: ${el}€
    
    This month you used ${wData.readings} ${wData.units} of water
    It will cost: ${water}€`;

	return text;
};

const invoice = sendInvoice(monthPayments, electricityUserData, waterUserData);
console.log(invoice);