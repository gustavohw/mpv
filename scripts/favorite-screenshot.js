//Install Git and copy from C:\Program Files\Git\usr\bin\mkdir.exe or point to that
var mkdir = "C:/Users/UserName/Desktop/Programs/mkdir/mkdir.exe";

var screenshot_folder = "C:/mpv-screenshots/mpv";
var final_dest = "";

function favorite_screenshot(){
	try{
		mp.utils.subprocess({"args" : [mkdir, screenshot_folder.trim()]});
	}catch(e){
		mp.osd_message(e, 3);
	}
	try{
		var media_title = mp.get_property("media-title");
		media_title = format_title(remove_dots_ext(media_title));
		final_dest = screenshot_folder + "/" + media_title;
		mp.utils.subprocess({"args" : [mkdir, final_dest.trim()]});
	}catch(e){
		mp.osd_message(e, 3);
	}
	
	try{
		var startTime_ms = mp.get_property("playback-time");
		var startTime_minutes = Math.floor(startTime_ms / 60);
		var startTime_seconds = parseInt(startTime_ms - (startTime_minutes * 60));
		var final_time = pre_zero(startTime_minutes.toString()) + "-" + pre_zero(startTime_seconds.toString()) + "-" + startTime_ms;
		try{
			mp.commandv("screenshot-to-file", final_dest.trim() + "/" + media_title.trim() + " " + final_time +".png", "video");
		}catch(e){
			mp.osd_message(e, 5);
		}
		finally {
            mp.osd_message("Screenshot saved successfully "+ media_title.trim() + " " + final_time +".png", 1);
        }
	}catch(e){
		mp.osd_message(e, 3);
	}

}

function format_title(title){
	final_title = title.replace(/(\[.*?\]|\(.*?\)) */g, "");
	final_title = final_title.replace(":", "");
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

mp.add_key_binding("ctrl+s", "save-favorite-screenshot", favorite_screenshot);