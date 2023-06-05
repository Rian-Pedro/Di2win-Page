import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  questions: Array<{title: string, content: string}> = [
    { title: "O que é a ferramenta extrAIdados?",
      content: "A ferramenta utiliza Inteligência Artificial de Machine Learnig e OCR para extrair e processar os dados, o que permite treinar a ferramenta para aprender com os dados, identificar padrões e tomar decisões com o mínimo de intervenção humana." },
    { title: "Quais tipos de documentos podem ser utilizados para extração de dados?",
      content: "Podem ser documentos estruturados, semi-estruturados e não estruturados, nos formatos em PDF, imagem (JPEG, PNG), TXT, DOC, DOCX, XLS, PPT." },
    { title: "Os dados extraídos podem ser estruturados e devolvidos em que formatos?",
      content: "JSON, TXT, XLS, DOCX." },
    { title: "Posso acessar a ferramenta em qualquer dispositivo?",
      content: "A ferramenta pode ser acessada por mobile, desktop, tablet ou notebook." },
    { title: "Como ter acesso a ferramenta e qual o custo de utilização?",
      content: "Através do contato com nossa equipe você pode solicitar uma demonstração gratuita e testar a ferramenta. O custo é por volume de extração realizada, sendo adequado a operação de cada usuário. " },
    { title: "Como saber a quantidade de páginas que já utilizei do meu contrato?",
      content: "A extrAIdados registra a quantidade de páginas de acordo com seu contrato, permitindo que você tenha essa informação de forma precisa e atualizada. Basta acessar o sistema e buscar pela seção referente ao seu contrato para encontrar a contagem atualizada de páginas utilizadas." },
    { title: "Os documentos e imagens processadas pela extrAIdados são armazenadas pela Di2win?",
      content: "Os documentos não são armazenados pela Di2win. Os dados são recebidos, processados e devolvidos ao cliente, sendo descartados em seguida." },
    { title: "Quem tem acesso aos meus dados processados?",
      content: "Os dados são confidenciais, com restrição e controle de acesso na disponibilidade das informações as pessoas autorizadas. O usuário é validado pelo sistema e autorizado de acordo com as permissões a ele atribuídas." },
    { title: "Quais procedimentos de segurança são tomados com relação ao conteúdo extraído?",
      content: "A ferramenta ExtrAIdados está em conformidade com a LGPD, garantindo a proteção dos dados pessoais. Com ela, é possível extrair informações de forma segura e transparente, respeitando os direitos de privacidade dos usuários." }
  ]

  openResponse(event: any) {
    let response: HTMLElement = event.nextElementSibling;
    let img: HTMLImageElement = event.firstElementChild;

    if(response.classList.contains('invisible')) {
      response.classList.replace('invisible', 'visible');
      img.style.transform = 'rotate(90deg)';
    } else {
      response.classList.replace('visible', 'invisible');
      img.style.transform = 'rotate(0deg)';
    }
  }

}
