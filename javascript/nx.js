var turn = ("x")
var data = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var x = ("x")
function aa() {
	if(turn === x){
	document.getElementById('aa').src='pic/x.png';
	turn = ("o")
	data[0] = "x";
		this.check();
	}
	else{
	document.getElementById('aa').src='pic/o.png';
		turn = ("x")
		data[0] = "o";
	}
}
function ab() {
	if(turn === x){
	document.getElementById('ab').src='pic/x.png';
	turn = ("o")
	data[1] = "x";
	}
	else{
	document.getElementById('ab').src='pic/o.png';
			turn = ("x")
			data[1] = "o";}
}
function ac() {
	if(turn == x){
	document.getElementById('ac').src='pic/x.png';
	turn = ("o")
	data[2] = "x";
	}
	else{
	document.getElementById('ac').src='pic/o.png';
			turn = ("x")
			data[2] = "o";}
}

//row 2
function ba() {
	if(turn == x){
	document.getElementById('ba').src='pic/x.png';
	turn = ("o")
	data[3] = "x";
	}
	else{
	document.getElementById('ba').src='pic/o.png';
		turn = ("x")
		data[3] = "o";
	}
}
function bb() {
	if(turn == x){
	document.getElementById('bb').src='pic/x.png';
	turn = ("o")
	data[4] = "x";
	}
	else{
	document.getElementById('bb').src='pic/o.png';
			turn = ("x")
			data[4] = "o";}
}
function bc() {
	if(turn == x){
	document.getElementById('bc').src='pic/x.png';
	turn = ("o")
	data[5] = "x";
	}
	else{
	document.getElementById('bc').src='pic/o.png';
			turn = ("x")
			data[5] = "o";}
}

//row 3
function ca() {
	if(turn == x){
	document.getElementById('ca').src='pic/x.png';
	turn = ("o")
	data[6] = "x";
	}
	else{
	document.getElementById('ca').src='pic/o.png';
		turn = ("x")
		data[6] = "o";
	}
}
function cb() {
	if(turn == x){
	document.getElementById('cb').src='pic/x.png';
	turn = ("o")
	data[7] = "x";
	}
	else{
	document.getElementById('cb').src='pic/o.png';
			turn = ("x")
			data[7] = "o";}
}
function cc() {
	if(turn == x){
	document.getElementById('cc').src='pic/x.png';
	turn = ("o")
	data[8] = "x";
	}
	else{
	document.getElementById('cc').src='pic/o.png';
			turn = ("x")
			data[8] = "o";}
			
	check();
}

function check() {
	if (data[0]+data[1]+data[2] == xxx){
		alert("team X won")}
	if (data[3]+data[4]+data[5] == xxx){
		alert("team X won")}
	if (data[6]+data[7]+data[8] == xxx){
		alert("team X won")}
	if (data[0]+data[4]+data[8] == xxx){
		alert("team X won")}
	if (data[2]+data[4]+data[6]== xxx){
		alert("team X won")}
	if (data[0]+data[3]+data[6] == xxx){
		alert("team X won")}
	if (data[2]+data[5]+data[8]== xxx){
		alert("team X won")}

	if (data[0]+data[1]+data[2] == ooo){
			alert("team 0 won")}
	if (data[3]+data[4]+data[5] == ooo){
		alert("team 0 won")}
	if (data[6]+data[7]+data[8]== ooo){
		alert("team 0 won")}
	if (data[0]+data[4]+data[8] == ooo){
		alert("team 0 won")}
	if (data[2]+data[4]+data[6] == ooo){
		alert("team 0 won")}
	if (data[0]+data[3]+data[6] == ooo){
		alert("team 0 won")}
	if (data[2]+data[5]+data[8] == ooo){
		alert("team 0 won")}
	alert("hi")
}