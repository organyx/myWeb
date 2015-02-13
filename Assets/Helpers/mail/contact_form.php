<?php

require 'PHPMailerAutoload.php';
//Fetching Values from URL
$name = $_POST['name1'];
$email = $_POST['email1'];
$message = $_POST['message1'];
//sanitizing email
$email = filter_var($email, FILTER_SANITIZE_EMAIL);
//After sanitization Validation is performed
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {


	//Create a new PHPMailer instance
	$mail = new PHPMailer;
	//Tell PHPMailer to use SMTP
	$mail->isSMTP();
	//Enable SMTP debugging
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	$mail->SMTPDebug = 0;
	//Ask for HTML-friendly debug output
	$mail->Debugoutput = 'html';

	//Set the hostname of the mail server
	$mail->Host = 'smtp.gmail.com';

	//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
	$mail->Port = 587;

	//Set the encryption system to use - ssl (deprecated) or tls
	$mail->SMTPSecure = 'tls';

	//Whether to use SMTP authentication
	$mail->SMTPAuth = true;

	//Username to use for SMTP authentication - use full email address for gmail
	$mail->Username = "aleksandr.beliun@aiesec.net";

	//Password to use for SMTP authentication
	$mail->Password = "qvq7ep4vu2";

	//Set who the message is to be sent from
	$mail->setFrom($_POST['email1']);
	//Set the subject line
	$mail->Subject = $_POST['name1'];
	//Set who the message is to be sent to
	$mail->addAddress('organyx92@hotmail.com', 'Me');
	//Read an HTML message body from an external file, convert referenced images to embedded,
	//convert HTML into a basic plain-text alternative body
	//$mail->msgHTML(file_get_contents('../../../index2.html'), dirname(__FILE__));
	$mail->Body = "FROM: <br>" . $name . " <br>Email: <br>" . $email . " <br>Message: <br>" . $message;
	//Replace the plain text body with one created manually
	$mail->AltBody = $message;

	//send the message, check for errors
	if (!$mail->send()) {
			echo "Mailer Error: " . $mail->ErrorInfo;
	} else {
			echo "Message sent!";
	}

/*
	// Send mail by PHP Mail Function
	mail("aleksandr.beliun@gmail.com", $subject, $sendmessage, $headers);
	echo "Your Query has been received, We will contact you soon.";*/

} else {
echo "<span>* invalid email *</span>";
}

?>
