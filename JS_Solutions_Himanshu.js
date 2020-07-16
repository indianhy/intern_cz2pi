//1
function revNum(num)
{
	var n= num
	var rev = 0
	while (n>0)
	{
		rev = rev * 10 + n % 10
		n = Math.floor(n/10)
	}
	console.log("Reversed number : "+rev)
}

//2
function isPalindrome(str)
{
	for(let i=0; i< str.length /2;i++){
		if(str[i] !== str[str.length -1-i])
			return false;
	}
	return true;
}

//3
function capitalizeFirstLetter(str)
{
	let arr = str.split(' ')
	arr.forEach((i,j)=>{
		arr[j] = i.replace(i[0],i[0].toUpperCase())
	})

	console.log(arr.join(' '))
}


//4
function printDistinct(str){
	distinctChars=""
	count = []
	for(i=0;i<256;i++)
		count[i]=0

	for (i in str)
	{
		if(str[i] != ' ')
			count[(str[i]).charCodeAt(0)] += 1
	}

	for (i in str)
	{
		if (count[(str[i]).charCodeAt(0)] == 1)
			distinctChars+=str[i]
	}
	console.log(distinctChars)
}



//5
function charCount(str, c)
{
	 var count = 0;
	for (let i=0; i< str.length; i++)
	{
		if (str.charAt(i) == c)
			count++
	}
	console.log(c+" appears "+count+" tiimes.")
}

//6
function getFunctionName()
{
	console.log(arguments.callee.name)
}

//7
function isWeekend(date){
	dt = new Date(date)
	if(dt.getDay()==6 || dt.getDay()==0)
		console.log("Weekend")
	else
		console.log("WeekDay")
}

//8
function dateDifference(date1, date2) {
	dt1 = new Date(date1);
	dt2 = new Date(date2);
	console.log(((dt2-dt1)/(24*60*60*1000))+" days");
}

function getMonth(monthStr){
    return new Date(monthStr+'-1-01').getMonth()+1
}

//9
function lastDayOfMonth(month)
{
	if(isNaN(month))
		{
			month=getMonth(month)
		}
	console.log(new Date(2020,month,0))
}

//10
function yesterday()
{
	console.log(new Date(new Date()-24*60*60*1000))
}

//11
function getObjectProperties(obj){
	console.log(Object.keys(obj))
}


//12
function sortArray(){
	var library = [
{
title: 'The Road Ahead',
author: 'Bill Gates',
libraryID: 1254
},
{
title: 'Walter Isaacson',
author: 'Steve Jobs',
libraryID: 4264
},
{
title: 'Mockingjay: The Final Book of The Hunger Games',
author: 'Suzanne Collins',
libraryID: 3245
}];
console.log(library.sort(function(a,b){return a.libraryID-b.libraryID}))
}

//HimanshuYadav