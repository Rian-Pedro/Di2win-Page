import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  advantageList: Array<{num: String, title: String, text: String}> = [
    {num: '01',
     title: 'RECEBÍVEIS',
     text: 'Por meio da ferramenta é possível acelerar o processo de extração das informações de duplicatas, contratos de aluguel, hipotecas, notas fiscais de serviços, precatórios, debêntures e outros recebíveis.'},
     {num: '02',
     title: 'Documentos Societários',
     text: 'Por meio da ferramenta é possível extrair dos documentos societários informações de pessoas, poderes, bens, cotas, etc.'},
     {num: '03',
     title: 'Documento Contábil',
     text: 'Através dos demonstrativos da empresa como balanço patrimonial, DRE, balancetes e outros demonstrativos é possível extrair as informações contábeis e aplicar as análises financeiras de endividamento, liquidez, rentabilidade, curva ABC, faturamento, entre outras análises.'},
     {num: '04',
      title: ' Documentos Pessoais',
      text: 'Nos documentos estruturados como CNH, RG, IRPF, Comprovante de Residência, Certidão de Casamento, Certidão de Nascimento, podemos extrair dados pessoais de endereço, nomes, datas, valores, entre outras informações que constem nestes documentos e sejam necessárias'}
  ]

}
