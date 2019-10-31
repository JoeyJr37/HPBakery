<?php

if($_POST["submit"]) {
    $recipient="joeyjr11@gmail.com";
    $subject="New Question via JustDesserts Website";
    $sender=$_POST["firstName" + "_" + "lastName"];
    $senderEmail=$_POST["email"];
    $message=$_POST["question"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>