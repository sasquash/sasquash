$('#reportListPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	console.log("reports for " + id);
	$.getJSON(serviceURL + 'getreports.php?id='+id, function (data) {
		var reports = data.items;
		$.each(reports, function(index, user) {
			$('#reportList').append('<li><a href="userdetails.html?id=' + user.id + '">' +
					'<h4>' + user.firstName + ' ' + user.lastName + '</h4>' +
					'<p>' + user.title + '</p>' +
					'<span class="ui-li-count">' + user.reportCount + '</span></a></li>');
		});
		$('#reportList').listview('refresh');
	});
});
