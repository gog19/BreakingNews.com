let date = new Date();
let year = date.getFullYear();
let monthDay = date.getDate()
let day = date.getDay()

switch (day) {
	case 0:
		day = 'Sunday';
		break;
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
		break;
}


function gettingMonth() {

	let month = [];

	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";

	return month[date.getMonth()];
}


function addZero (i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i
}

let hour = addZero(date.getHours());
let minute = addZero(date.getMinutes());

export default {
	day,
	gettingMonth,
	monthDay,
	year,
	hour,
	minute
}