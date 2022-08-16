# Arredondador de Notas

### Objetivo

* O arredondamento só ocorre para notas acima da média que é 40, a nota máxima é 100.
* O valor da nota menos o próximo múltiplo de 5, tem de ser menor que 3.

### Exemplo

[73, 94, 38, 33]

*retornará:* [75, 95, 40, 33]

***===> 75 - 73 = 2 então 73 será arredondado para 75.***
***===> 94 - 95 =  então 94 será arredondado para 95.***
***===> 38 - 40 = 2 então 38 será arredondado para 40.***
***===> 33 usa por base 35 e não 40 que é o valor mínimo, então ele não é arredondado.***
