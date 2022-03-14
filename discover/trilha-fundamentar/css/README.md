# Introdução

## O que significa CSS?

* Cascading Style Sheet
* Código para criar estilos no HTML
* HTML é a estrutura, e o CSS é a beleza
* Não é uma linguagem de programação
* É uma linguagem Style Sheet

# Anatomia

```css
h1 {
  color: blue;
  font-size: 16px;
  background: gray;
}
```

* Selector
* Declaration
* Properties
* Property Value

# Selectors

Conecta um elemento HTML com o CSS

## Tipos

* Global selector `*`
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros

# Adicionando CSS

## inline

* atributo`style`

## <style>

* tag html que irá conter o css

## <link>

* arquivo css externo

## @import

* arquivo css externo

# A cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regrar para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância

### Origem do estilo

inline > tag style > tag link

### Especificidade

É um calculo matemático, onde, cada tipo de seletor e origem de estilo, possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID Selector
1000. Inline

### A Regra !important

* cuidado, evite o uso
* não é considerado uma boa prática
* quebra o fluxo natural da cascata

# At-rules

* Está relacionado ao compartamento do CSS
* Começa com o sinal de `@` seguido do identificador e valor

## Exemplos comuns

- @import       /* Incluir um CSS externo */
- @media        /* Regras condicionais para dispositivos */
- @font-face    /* Fontes externas */
- @keyframes    /* Animation */

```css
@import "http://local.com/style.css";

@media (min-width: 500px) {
  /* rules here */
}

@font-face {
  /* rules here */
}

@keyframes nameofanimation {
  /* rules here */
}
```

# Shorthand

* Junção de propriedades
* Resumo
* Legível

```css
{
  /* background properties */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* background shorthand */
  background: #000 url(images/bg.gif) no-repeat left top;

  /* font properties */
  font-style: italic;
  font-weight: bold;
  font-size: .8em;
  line-height: 1.2;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: italic bold .8em/1.2 Arial, sans-serif;
}
```

## Detalhes

* Não irá considerar propriedades anteriores
* Valores não especificados irão assumir o valor padrão
* Geralmente, a ordem descrita não importa, mas, se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas

## Propriedades que aceitam shorthand

animation, background, border, border-block-end, border-block-start, border-bottom, border-color, border-image, border-inline-end, border-inline-start, border-left, border-radius, border-right, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, gap, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, mask, offset, outline, overflow, padding, place-content, place-items, place-self, scroll-margin, scroll-padding, text-decoration, text-emphasis, transition

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**

# Funções

* Nome seguido de abre e fecha parantesis
* Recebe argumentos

## Exemplos

```css
@import url("http://urlaqui.com/style.css");

{
  color: rgb(255, 0, 100);
  width: calc(100% - 10px)
}
```

# Vendor Prefixes

Permite que browsers adicione `features` 
a fim de colocar em uso alguma novidade que vemos no CSS

# Exemplo

```css
p {
  -webkit-background-clip: text;       /* Chrome, Safari, iOS e Android */
  -moz-background-clip: text;          /* Mozilla (Firefox) */
  -ms-background-clip: text;           /* Internet Explorer */
  -o-background-clip: text;            /* Opera */
}
```

## Consultas

.[http://ireade.github.io/which-vendor-prefix/]
.[http://caniuse.com]