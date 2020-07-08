<?php
$nome = $_POST['nome']; 
$email = $_POST['email']; 
$mensagem = $_POST['mensagem']; 

require_once('../src/PHPMailer.php');
require_once('../src/SMTP.php'); 
require_once('../src/Exception.php'); 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true); 

try { 
   //$mail->SMTPDebug = SMTP::DEBUG_SERVER; 
   $mail->isSMTP(); 
   $mail->Host = 'smtp.gmail.com'; 
   $mail->SMTPAuth = true; 
   $mail->Username = 'seu email'; 
   $mail->Password = 'sua senha'; 
   $mail->Port = 587; 

   $mail->setFrom('seu email'); 
   $mail->addAddress('seu email'); 

   $mail->isHTML(true); 
   $mail->Subject = 'Email - Site Jessica Costa e Silva'; 
   $mail->Body = '<b>Nome: </b>'.$nome.'<br><b>Email: </b>'.$email.'<br><b>Mensagem: </b>'.$mensagem; 
   $mail->AltBody = 'Nome: '.$nome.' Email: '.$email.' Mensagem: '.$mensagem;
   
   if($mail->send()){
       echo '1'; 
   }else{
       echo 'Email não enviado'; 
   }

} catch(Exception $e){
    echo "Erro ao enviar mensagem :{$mail->ErrorInfo}"; 
}
?> 