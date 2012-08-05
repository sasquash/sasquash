$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getuser.php?id='+id, displayuser);
});

function displayuser(data) {
	var user = data.item;
	console.log(user);
	$('#userPic').attr('src', 'pics/' + user.picture);
	$('#fullName').text(user.firstName + ' ' + user.lastName);
	$('#userTitle').text(user.title);
	$('#city').text(user.city);
	console.log(user.officePhone);
	if (user.managerId>0) {
		$('#actionList').append('<li><a href="userdetails.html?id=' + user.managerId + '"><h3>View Manager</h3>' +
				'<p>' + user.managerFirstName + ' ' + user.managerLastName + '</p></a></li>');
	}
	if (user.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + user.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + user.reportCount + '</p></a></li>');
	}
	if (user.email) {
		$('#actionList').append('<li><a href="mailto:' + user.email + '"><h3>Email</h3>' +
				'<p>' + user.email + '</p></a></li>');
	}
	if (user.officePhone) {
		$('#actionList').append('<li><a href="tel:' + user.officePhone + '"><h3>Call Office</h3>' +
				'<p>' + user.officePhone + '</p></a></li>');
	}
	if (user.cellPhone) {
		$('#actionList').append('<li><a href="tel:' + user.cellPhone + '"><h3>Call Cell</h3>' +
				'<p>' + user.cellPhone + '</p></a></li>');
		$('#actionList').append('<li><a href="sms:' + user.cellPhone + '"><h3>SMS</h3>' +
				'<p>' + user.cellPhone + '</p></a></li>');
	}
	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
