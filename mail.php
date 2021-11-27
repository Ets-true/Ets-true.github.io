<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$name = $_POST['name'];
$phone = $_POST['phone'];
$company = $_POST['company'];

echo $name,$phone, $company;

                            
$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  																							
$mail->SMTPAuth = true;                             
$mail->Username = 'contact@departmentview.ru'; 
$mail->Password = 'Eshkeree1';
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465; 

$mail->setFrom('contact@departmentview.ru'); 
$mail->addAddress('contact@departmentview.ru');     

$mail->isHTML(true);                                  

$mail->Subject = 'Заяка с сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Компания клиента: ' .$company;
$mail->AltBody = '';

$mail->send();

// if(!$mail->send()) {
//     echo 'Error';
// } else {
//     header('location: thank-you.html');
// }
?>