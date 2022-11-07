<?php 
if(isset($_POST['submit'])){
    $to = "perezcabaleiroadria@gmail.com"; // this is your Email address
    $to2 = $_POST['mail'];
    $from = "info@b-wise.es"; // this is the sender's Email address
    $name = $_POST['nombre'];
    $subject = $name . "  te ha enviado un mensaje";
    $subject2 = "Gracias por contactar!";
    $message = $name . " te ha escrito! \r\n" . $_POST['mensaje'];
    $message2 = "Responderé lo antes posible. Aquí tienes una copia del mensaje: \r\n"  . $_POST['mensaje'];

    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);
    mail($to2,$subject2,$message2,$headers); // sends a copy of the message to the sender
    header("Location: https://adria.b-wise.es/");
    die();
}
?>