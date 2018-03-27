//Download from https://www.nirsoft.net/utils/nircmd.html
var nircmdc = "C:/Users/UserName/Desktop/Programs/nircmdc.exe";

var startTime_ms = 0.0;
var startTime_minutes = 0;
var startTime_seconds = 0;

var endTime_ms = 0.0;
var endTime_minutes = 0;
var endTime_seconds = 0;

function favorite(){
	if (startTime_ms == 0.0){
		startTime_ms = mp.get_property("playback-time");
		startTime_minutes = Math.floor(startTime_ms / 60);
		startTime_seconds = parseInt(startTime_ms - (startTime_minutes * 60));
		mp.osd_message(startTime_minutes + ":" + startTime_seconds);
	}
	else{
		endTime_ms = mp.get_property("playback-time");
		endtime_minutes = Math.floor(endTime_ms / 60);
		endTime_seconds = parseInt(endTime_ms - (endtime_minutes * 60));
		var media_title = mp.get_property("media-title");	
		media_title = format_title(remove_dots_ext(media_title));
		var finalText = media_title + " - " + pre_zero(startTime_minutes) + ":" + pre_zero(startTime_seconds) + " -> " + pre_zero(endtime_minutes) + ":" + pre_zero(endTime_seconds);
		mp.osd_message(finalText, 3);

		try{
			mp.utils.subprocess_detached({"args" : [nircmdc, "clipboard", "set", finalText]});
			reset();
		}catch(e){
			mp.osd_message(e, 3);
		}
	}
}

function format_title(title){
	final_title = title.replace(/(\[.*?\]|\(.*?\)) */g, "");
	return final_title.replace(/ +(?= )/g,'').toString();
}

function remove_dots_ext(str){
	str = str.slice(0, -3); //mkv,mp4,avi
	str = str.split('_').join(" ");
	return str.split('.').join(" ");
}

function pre_zero(n){
	str = n.toString();
	
	if (str.length < 2){
		var final_string = "0" + str;
		return final_string.toString();
	}
	else{
		return str.toString();
	}
	
}

function reset(){
	startTime_ms = 0;
	endTime_ms = 0;
}

mp.add_key_binding("ctrl+d", "save-favorite", favorite);