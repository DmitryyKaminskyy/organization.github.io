<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "drakon2000@ukr.net"; //Admins e-mail

$tema = "To you the message from the visitor of a site";
$message_to_myemail = "You application for the newsletter:
<br><br>
Customer contact information:<br>
E-mail: $email<br>
Message text: $message<br>


Source (link): $refferer
";
mail($myemail, $tema, $message_to_myemail, "From: Name of site <drakon2000@ukr.net> \r\n Reply-To: Name of site \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );
$tema = "Hello! You left a message on the site";
$message_to_myemail = "
	Hello! You left a message on the site!
	Our company news will be sent to you every week.
	Thank you for your choice.

";
$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: Name of Site <drakon2000@ukr.net> \r\n Reply-To: Name of Site \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);


?>
