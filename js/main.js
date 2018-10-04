function onoff() {
	$("#imgoff").toggle();

	if ($("#onoffbutton").val() == "Off") {
		$("#onoffbutton").val("On");
	}else if ($("#onoffbutton").val() == "On") {
		$("#onoffbutton").val("Off");
	};
}