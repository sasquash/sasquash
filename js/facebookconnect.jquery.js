/**
 * By ikhuerta@gmail.com
 * More info @ blog.ikhuerta.com
 */

// DEFINE YOUR SETTINGS

$.facebook = {


	// change this for your facebook app api key
	apikey : "54d4eb8cf2a7ddb90f8986fb52752f1f",

	// change this for the absolute uri of your xd_receiver.html document
	channelpath : "/facebookConnect/xd_receiver.htm",

	// change this for your locale settings
	locale : "es_ES",

	// change to false if you don't want use FBML and XFBML labels
	useFBML : true,

	// !!! don't change before this line
	onloadFunctions : [],
	ready : function (thefunction) {
		this.onloadFunctions[this.onloadFunctions.length] = thefunction
	}
};
 
       


/// LOADING FACEBOOK JAVASCRIPT API...

document.write('<scr'+'ipt src="http://static.ak.connect.facebook.com/js/api_lib/v0.4/FeatureLoader.js.php/' + $.facebook.locale + '" type="text/javascript"></sc'+'ript>');
var currentUrl = window.location.href.split("/");
currentUrl.shift();
currentUrl.shift();
currentUrl.shift();
if ( currentUrl[currentUrl.length-1].indexOf(".") )
	currentUrl.pop();
var channelpath = $.facebook.channelpath.split("/");
channelpath.shift();
for(var i=0;currentUrl[i] && channelpath[i] && currentUrl[i] == channelpath[i] ;i++)
{
	currentUrl.shift();
	channelpath.shift();
}
channelpath = channelpath.join("/");
for(var i=0;i<currentUrl.length;i++)
{
	channelpath = "../" + channelpath;
}
$.facebook.channelpath = channelpath;
$(document).ready(function() {
FB.init($.facebook.apikey, $.facebook.channelpath);
FB_RequireFeatures(["Api"], function(){
	FB.Facebook.init($.facebook.apikey, $.facebook.channelpath);
    FB.ensureInit(function() {
    	$.fb = FB.Facebook.apiClient;
    	FB.Connect.ifUserConnected(function(){
    	for(var i=0;i<$.facebook.onloadFunctions.length;i++)
    	{
    		$.facebook.onloadFunctions[i]();
    	}
    	});
    });
});
});
