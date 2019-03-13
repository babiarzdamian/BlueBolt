<?php
if(isset($_POST['email'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "btlp@ntt.pl";
    $email_subject = "A new offer query from your website";


    function died($error) {
        // your error code can go here
        echo "We have got a little problem, please try again later.";
        echo $error."<br /><br />";
        die();
    }

    // validation expected data exists
    if(
    !isset($_POST['email'])) {
        died('We have got a little problem, please try again later.');
    }

    $name_from      = $_POST['name']; // required
    $email_from     = $_POST['email']; // required
    $location_from  = $_POST['location'];
    $agreement      = $_POST['agreement'];


    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email_from)) {
        $error_message .= 'Incorrect e-mail address<br />';
    }

    if(strlen($error_message) > 0) {
        died($error_message);
    }
    $email_message = "A new offer query from:\n\n";

    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }

    $email_message .= "Name: ".clean_string($name_from)."\n"."Email: ".clean_string($email_from)."\n"."From: ".clean_string($location_from)."\n"."Agreement: ".clean_string($agreement)."\n";


// create email headers
    $headers = 'From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
    ?>
    Nice to see your interest in Blue Bolt. We’ll contact you soon and promise You won’t be disappointed.
    <?php
}
?>