//var serviceURL = "http://tumami.es/phonegap/services/";
var serviceURL = "http://localhost/pg_tm/services/";
var users;

$('#userListPage').bind('pageinit', function(event) {
	getUserList();
});

function getUserList() {

	$.getJSON(serviceURL + 'getUsers.php', getJSONSuccess).error(function() { alert("Can't connect to serviceURL"); });
	function getJSONSuccess(data) {
		$('#userList li').remove();
		users = data.items;
		$.each(users, function(index, user) {
			$('#userList').append('<li><a href="userdetails.html?id=' + user.id + '">' +
				'<img src="pics/' + user.picture + '"/>' +
				'<h4>' + user.firstName + ' ' + user.lastName + '</h4>' +
				'<p>' + user.title + '</p>' +
				'<span class="ui-li-count">' + user.reportCount + '</span></a></li>');
		});
		$('#userList').listview('refresh');
	}

}