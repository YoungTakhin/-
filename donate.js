function dashangToggle() {
	$(".shang_box").fadeToggle();
}

function changeItem(i) {
	var k = 3;
	for (var j = 0; j < k; j++) {
		if (j == i) {
			document.getElementById("sl_shang" + j).style.display = "block";
		} else {
			document.getElementById("sl_shang" + j).style.display = "none";
		}
	}
}

function opay() {
	document.getElementById("sl_shang").target = "_parent";
}
