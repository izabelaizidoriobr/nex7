<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if (!empty($_POST['email'])) {
    $nome = htmlspecialchars($_POST['nome']);
    $sobrenome = htmlspecialchars($_POST['sobrenome']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    if (!$email) {
        die("Email inválido");
    }
    $empresa = htmlspecialchars($_POST['empresa']);
    $segmento = htmlspecialchars($_POST['segmento']);
    $cidade = htmlspecialchars($_POST['cidade']);
    $estado = htmlspecialchars($_POST['estado']);
    $referencia = htmlspecialchars($_POST['referencia']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'kelwin.esechiel28@gmail.com'; // substitui
        $mail->Password   = 'ezjxblpcbanwocul'; // na Hostinger, Senha do email criado na Hostinger
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        $mail->setFrom('kelwin.esechiel28@gmail.com', 'Site Contato'); //substitui
        $mail->addAddress('kelwin.esechiel8@gmail.com', 'Kelwin'); //substitui
        $mail->addReplyTo($email, $nome . ' ' . $sobrenome);

        $mail->isHTML(true);
        $mail->Subject = 'Nova mensagem do formulário de contato';
        $mail->Body    = "
            <h2>Nova mensagem recebida:</h2>
            <b>Nome:</b> {$nome} {$sobrenome}<br>
            <b>Email:</b> {$email}<br>
            <b>Empresa:</b> {$empresa}<br>
            <b>Segmento:</b> {$segmento}<br>
            <b>Cidade:</b> {$cidade}<br>
            <b>Estado:</b> {$estado}<br>
            <b>Como ouviu falar:</b> {$referencia}<br><br>
            <b>Mensagem:</b><br> {$mensagem}
        ";
        $mail->AltBody = "Nome: {$nome} {$sobrenome}\n".
                         "Email: {$email}\n".
                         "Empresa: {$empresa}\n".
                         "Segmento: {$segmento}\n".
                         "Cidade: {$cidade}\n".
                         "Estado: {$estado}\n".
                         "Como ouviu falar: {$referencia}\n\n".
                         "Mensagem:\n{$mensagem}";

        $mail->send();
        echo "<h3>Mensagem enviada com sucesso!</h3>";
        echo '<a href="index.html">Voltar</a>';
    } catch (Exception $e) {
        echo "Erro ao enviar: {$mail->ErrorInfo}";
    }
} else {
    echo "Formulário não enviado. Verifique os campos.";
}
