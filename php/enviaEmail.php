<?php
$nome = $_POST['nome']; 
$email = $_POST['email']; 
$mensagem = $_POST['mensagem']; 

require_once('../src/PHPMailer.php');
require_once('../src/SMTP.php'); 
require_once('../src/Exception.php'); 
require_once './config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true); 

try { 
   //$mail->SMTPDebug = SMTP::DEBUG_SERVER; 
   $mail->isSMTP(); 
   $mail->Host = 'smtp.gmail.com'; 
   $mail->SMTPAuth = true; 
   $mail->Username = $config['email'];
   $mail->Password = $config['senha'];
   $mail->Port = 587; 
   #$mail->SMTPDebug = 2;

   $mail->setFrom($config['email']); 
   $mail->addAddress($config['email']); 

   $mail->isHTML(true); 
   $mail->Subject = 'Email - Website Jessica'; 
   $mail->Body = '<b>Nome: </b>'.$nome.'<br><b>Email: </b>'.$email.'<br><b>Mensagem: </b>'.$mensagem; 
   $mail->AltBody = 'Nome: '.$nome.' Email: '.$email.' Mensagem: '.$mensagem;
   
   if($mail->send()){
       echo '1'; ## Success
   }else{
       echo 'Email not sent'; 
   }

} catch(Exception $e){
    echo "Error sending message: {$mail->ErrorInfo}"; 
}
?>  