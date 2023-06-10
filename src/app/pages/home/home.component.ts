import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrayCarrossel: Array<{ title: string, url: string, text: string }> = [
      { title: 'financeiro',
        url: '../../../../assets/soluções/financeiro.svg',
        text: 'A tecnologia de ponta da extrAIdados agiliza a coleta de dados, reduzindo erros e melhorando a eficiência operacional. Com essa ferramenta, empresas podem tomar decisões mais embasadas, maximizar receitas e minimizar riscos.'
      },

      { title: 'imobiliário',
        url: '../../../../assets/soluções/imobiliario.svg',
        text: 'A ferramenta simplifica automatizando a extração de registros de propriedades, contratos e transações. Isso permite aos profissionais otimizar processos, eliminando tarefas administrativas repetitivas.'
      },

      { title: 'educação',
        url: '../../../../assets/soluções/educacao.svg',
        text: 'A ferramenta extrAIdados simplifica a gestão administrativa das instituições educacionais, automatizando processos como matrículas, registros de alunos e fluxo de documentos. Isso permite que as equipes se concentrem no ensino e na melhoria da experiência dos alunos.'
      },

      { title: 'seguros',
        url: '../../../../assets/soluções/seguros.svg',
        text: 'O extrAIdados oferece automação na coleta de dados. Com a ferramenta as companhias de seguros podem agilizar o processamento de sinistros, avaliar riscos com maior precisão e fornecer um serviço mais eficiente aos segurados.'
      }
  ]

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
