//////////////1.1//////codewars/////////////

function formatMoney(amount){
	return "$" + amount.toFixed(2);    
}



///////////1.2////
function getDrinkByProfession(param){
	var paramCase = param.toLowerCase();
	switch(paramCase) {
		case "jabroni":
			return "Patron Tequila"
			break;
		case "school counselor":
			return "Anything with Alcohol"
			break;
		case "programmer":
			return "Hipster Craft Beer"
			break;
		case "bike gang member":
			return "Moonshine"
			break;
		case "politician":
			return "Your tax dollars"
			break;
		case "rapper":
			return "Cristal"
			break;
		default:
			if(paramCase.length > 0) {
				return "Beer"
			}
		break;
	}     
}

////////////2.1//////////////
function bandNameGenerator(str) {
	console.log(str.charAt(str.length))
	if(str.charAt(0)  == str.charAt(str.length-1)){
		let retorno = (str.charAt(0).toUpperCase()+ str.slice(1))
		let secondWord = str
		secondWord = secondWord.replace(secondWord.charAt(0),'');
		return(retorno+secondWord)
	}else{
		let retorno = "The "
		retorno = retorno+str.charAt(0).toUpperCase()+ str.slice(1) 
		return (retorno)
	}
}

/////////////////////2.2////////////

function avgArray(arrs) {
	var l = arrs.length;
	var resArr = [];
	temp = [];
	temp2 = [];
	
	arrs.map(arr => {
		arr.map(el => {temp.push(el)})
	});
	
	var iterator = temp.length/l;
	
	for (var i = 0; i < temp.length; i++) {
		for (var j = i; j < temp.length; j+=iterator) {
			temp2.push(temp[j]);
		}
	}
	
	var sortedArr = temp2.splice(0, temp.length);
	
	function averageEvery(arr, n) {
		if (!arr || !n){
			return false;
		}
		let groups = [];
		while (arr.length) {
			groups.push(arr.splice(0, n));
		}
		return groups.map(group =>
		  group.reduce((a, b) => a + b) / group.length
		);
	}
	
	return averageEvery(sortedArr, l);
}