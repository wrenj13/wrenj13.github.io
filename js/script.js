function isEmpty(str) {
    return (!str || 0 === str.length);
}

function check_required() {
    if (document.getElementById("error-message").style.display != "none") {
    	if (!isEmpty(document.getElementById("comment-form").name.value) && !isEmpty(document.getElementById("comment-form").email.value)) { 
	   	document.getElementById("error-message").style.display = "none";
	 }
    }
}

$('#comment-form').on('submit', function () {
   var message_data = { "name": document.getElementById("comment-form").name.value, "email": document.getElementById("comment-form").email.value, "comment": document.getElementById("comment-form").comment.value };
   if (isEmpty(message_data["name"]) || isEmpty(message_data["email"])) { 
   	document.getElementById("error-message").style.display = "block";
   	return false;
   }
   if (isEmpty(message_data["comment"])) {
   	message_data["comment"] = "No message provided.";
   }
   $.ajax({
    url: 'email_comment.php',
    type: 'POST',
    data: message_data,
    success: function(data){ 
        document.getElementById("submit-button").style.display = "none";
        document.getElementById("error-message").style.display = "none";
        document.getElementById("sent-message").style.display = "block";
    },
    error: function(data) {
        alert(data)
    }
});
    return false;
});