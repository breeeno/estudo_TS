interface Imailto {
    name: string;
    email: string;
};

interface ImailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface ImessageDTO {
    to: Imailto,
    message: ImailMessage
}

class EmailService {
    sendMail({to, message}: ImessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`); 
    }
}

export default EmailService; 