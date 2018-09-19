// 1 
function abbrev_name(name) {
	var names = name.split(" ");
	var firstname = names[0];
	var lastname = names[1];
	return firstname + " " + lastname.charAt(0) + ".";
}
var answer = abbrev_name("Robin Singh");
document.write("<h1>" + answer + "</h1>");


// 2
function string_parameterize(str) {
	var lowered = str.toLowerCase();
	var replaced = lowered.replace(".", "");
	var words = replaced.split(" ");
	return words.join("-");
}
var answer = string_parameterize("Robin Singh from USA.");
document.write("<h1>" + answer + "</h1>");


// 3
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.substring(1);
}

var answer = capitalize('js string exercises');
document.write("<h1>" + answer + "</h1>");

// 4
function capitalize_Words(words) {
	var alist = words.split(" "); // ["Aaa", "Bbb" ,"Ccc"]
	for (var i = 0; i < alist.length; i++) {
		alist[i] = capitalize(alist[i]);
	}
	return alist.join(" ");
}

var answer = capitalize_Words('js string exercises');
document.write("<h1>" + answer + "</h1>");


// 5
function is_string(arg) {
	return typeof(arg) == typeof("abc");
}

var answer = is_string('Javascript');
document.write("<h1>" + answer + "</h1>");
var answer = is_string([1, 2, 3]);
document.write("<h1>" + answer + "</h1>");


// 6
function repeat(str, num) {
	if (num == null) {
		// num is not passed.
		return str;
	} else {
		// repeat num times
		var result = "";
		for (var i = 0; i < num; i++) {
			result += str;
		}
		return result;
	}
}

var answer = repeat('Ha!');
document.write("<h1>" + answer + "</h1>");
var answer = repeat('Ha!', 3);
document.write("<h1>" + answer + "</h1>");


// 7
function count(str, sub) {
	var splitted = str.toLowerCase().split(" "); // ["the", "quick", "brown", ...]
	var counter = 0;
	for (var i = 0; i < splitted.length; i++) {
		if (splitted[i] === sub) {
			counter++;
		}
	}
	return counter;
}

var answer = count("The quick brown fox jumps over the lazy dog", "the");
document.write("<h1>" + answer + "</h1>");


var answer = count("The quick brown fox jumps over the lazy dog", "fox");
document.write("<h1>" + answer + "</h1>");




























