import { Component } from '@angular/core';

@Component({
  selector: 'app-fidc',
  templateUrl: './fidc.component.html',
  styleUrls: ['./fidc.component.css']
})
export class FidcComponent {

  listSolutions: Array<{ title: string, content: string }> = [
    { title: 'Recebíveis',
      content: 'Por meio do produto é possível acelerar o processo de extração das informações de duplicatas, contratos de aluguel, hipotecas, notas fiscais de serviços, precatórios, debêntures e outros recebíveis.' },
    { title: 'Documentos Societários',
      content: 'Por meio do produto é possível extrair dos documentos societários informações de pessoas, poderes, bens, cotas, etc.' },
    { title: 'Documento Contábil',
      content: 'Através dos demonstrativos da empresa como balanço patrimonial, DRE, balancetes e outros demonstrativos é possível extrair as informações contábeis e aplicar as análises financeiras de endividamento, liquidez, rentabilidade, curva ABC, faturamento, entre outras análises.' },
    { title: 'Documentos Pessoais',
      content: 'Nos documentos como CNH, RG, IRPF, Comprovante de Residência, Certidão de Casamento, Certidão de Nascimento, podemos extrair dados pessoais de endereço, nomes, datas, valores, entre outras informações que constem nestes documentos e sejam necessárias.' }

  ]

}
