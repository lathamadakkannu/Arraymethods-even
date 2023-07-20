var a=[11,10,70,75,59,2,9,68];
var b=[];
document.write("arr=[11,10,70,75,59,2,9,68]" + "<br>" + "<br>");
	for(let i=0; i<a.length; i++){
		if(a[i]%2!=0){
			b.push(a[i]);
		}
	}
		console.log(b);