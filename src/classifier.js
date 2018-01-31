/**
 * This is the entry point to the program
 *
 * @param {array} input Array of student objects
 */
function classifier(input) {
  // Your code should go here.
  
  	if(Array.isArray(input)) {
  		var groups = [];
  		var now = new Date();
  		var members = [];
  		for (var i = 0; i < input.length; i++) {
	  		var item = input[i];
	  		var dob = new Date(item.dob);
	  		item.age = now.getFullYear() - dob.getFullYear(); //Date.dateDiff('y', dob, now);
	  		members.push(item);
	  	}
	  	members.sort(compare);
	  	for (var i = 0; i < members.length; i++) {
	  		var member = members[i];
	  		if(i == 0)
	  			groups.push([member]);
	  		else {
	  			var noOfMembersInLastGroup = groups[groups.length-1].length;
	  			if(noOfMembersInLastGroup < 3) {
	  				var lastGroup = groups[groups.length-1];
	  				if((member.age - lastGroup[0].age) <= 5)
	  					groups[groups.length-1].push(member);
	  				else
	  					groups.push([member]);
	  			} else if(noOfMembersInLastGroup == 3) {
	  				groups.push([member]);
	  			}
	  		}
	  		//console.log(member);
	  	}
	  	var output = {
	  		noOfGroups: groups.length
	  	};
	  	for (var i = 0; i < groups.length; i++) {
	  		var group = groups[i];
	  		output["group"+(i+1)] = {
	  			members: group,
	  			oldest: group[group.length - 1].age,
	  			sum: group.reduce(function(a, b) {
				    return a + b.age;
				  }, 0),
	  			regNos: group.reduce(function(a, b) {
	  				if (a == 0) {
					    a = [];
					    a.push(parseInt(b.regNo));
					  }
					  else {
					    a.push(parseInt(b.regNo));
					  }
					  return a.sort(compareRegNo);
				  }, 0)
	  		};
	  	}
	  	return output;
  	} else {
  		throw "undefined";
  	}
}

function compare(a,b) {
  	if (a.age < b.age)
    	return -1;
  	if (a.age > b.age)
    	return 1;
  	return 0;
}

function compareRegNo(a,b) {
  	if (a < b)
    	return -1;
  	if (a > b)
    	return 1;
  	return 0;
}

if (!Array.isArray) {
  	Array.isArray = function(arg) {
    	return Object.prototype.toString.call(arg) === '[object Array]';
  	};
}

module.exports = classifier;
