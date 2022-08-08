### IMC - Índice de Massa Corpória.
 O IMC (Índice de Massa Corporal), mais do que o peso de fato na balança, é esse o valor que importa para manter a sua qualidade de saúde. O índice em questão é bem simples e qualquer um pode calcular em casa de forma fácil. Contudo, é importante saber interpretar o resultado e entender o que de fato ele diz sobre a sua saúde.
 <p>
Fonte:
 <img src="https://blogdojuca.uol.com.br/files/2013/04/uol.jpg" width="20px" /><a href="https://www.uol.com.br/vivabem/faq/imc-como-calcular-tabela-dicas-como-melhorar-e-mais.htm"><strong>UOL</strong></a>
 - acesso em 07/08/2022
</p>

### Objetivos
* Desenvolver a aplicações com HTML, CSS e JavaScript.
* Manipular o DOM com JavaScript.
* Com o IMC calculado com base no peso e altura, determinar também a faixa que o usuário
se encontra conforme a tabela abaixo:

|IMC|DESCRIÇÃO|
|---|---|
| 16 a 16,9 kg/m²|Muito abaixo do peso|
|17 a 18,4 kg/m²|Abaixo do peso|
|18,5 a 24,9 kg/m²|Peso normal|
|25 a 29,9 kg/m²|Acima do peso|
|30 a 34,9 kg/m²|Obesidade grau I|
|35 a 40 kg/m²|Obesidade grau II|
|maior que 40 kg/m²|Obesidade grau III|



### Tela da Aplicação
<img src="https://github.com/leoarcabold/calculadora-de-umc/blob/master/img/tela.jpg" width="350px" />

### Roteiro de Desenvolvimento
#### HTML
- [x] Montar HTML com 2 inputs do tipo texto e 1 botão
- [x] Utilizar id's nos inputs e botão
- [x] Inserir p para conter o resultado do cálculo

#### CSS
- [x] Estilizar inputs de forma que fiquem com o mesmo tamanho

#### JavaScript
- [x] Criar função start
- [x] Executar <strong>start( )</strong>
- [x] Criar e implementar função <strong>calculaImc (peso, altura)</strong>
- [x] Em start, obter os inputs e botão como variáveis com <strong>document.querySelector</strong>
- [x] Fazer com que botão calcule o IMC com <strong>addEventListener</strong> do tipo 'click'
- [x] Tornar o programa mais dinâmico monitorando os inputs com <strong>addEventListener</strong> do tipo <strong>'input'</strong>
- [x] Tornar os inputs mais amigáveis utilizando o <strong>type="number"</strong> e utilizando o atributo step
