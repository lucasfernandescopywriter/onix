# Marmoraria Ônix — A Arte da Rocha Sob Medida

Website institucional e portfólio de alto padrão da **Marmoraria Ônix**, especializada em acabamentos de luxo em rochas nobres (mármores, quartzitos e granitos selecionados) com corte 45° em meia-esquadria, cubas esculpidas e ilhas gourmet no interior de São Paulo.

---

## 🏛️ Sobre o Projeto

O site foi desenvolvido seguindo padrões internacionais de estética arquitetônica e design editorial (Poplawski Design System & Granos), com tipografia sofisticada (**Outfit** e **Sora**), contraste refinado e foco absoluto em conversão e experiência visual.

### Principais Seções
1. **Hero**: Fachada em alta definição, proposta de valor sob medida e métricas de autoridade (+15 anos de tradição, +1.200 obras concluídas, 100% corte 45°, 7 cidades atendidas).
2. **Portfólio de Obras**: Grade dinâmica de projetos reais (cozinhas com ilhas cascata, lavatórios nobres com cubas esculpidas, bancadas gourmet e lareiras) com filtros interativos.
3. **O Percurso**: Metodologia clara em 6 etapas (do entendimento e medição técnica à produção e conferência final).
4. **Especialidades em Rochas Nobres**: Detalhamento técnico dos principais acabamentos e soluções.
5. **Quem Somos**: Tradição artesanal com o fundador e mestre Carlos Cesar Setin.
6. **Cidades Atendidas**: Cobertura presencial em Matão, Dobrada, Araraquara, São Carlos, Ribeirão Preto, Jaboticabal e Taquaritinga.
7. **Catálogo de Rochas**: Mostruário minimalista de chapas nobres com filtros rápidos por categoria (Lançamentos, Linha Perla, Clássicos e Exóticos).
8. **Solicite seu Orçamento**: Formulário inteligente com integração e formatação automática de mensagem direta para o WhatsApp oficial.

---

## ⚡ Otimizações de Performance & Fluidez

- **Carregamento Otimizado de Imagens**: Todas as fotos foram tratadas e comprimidas com codificação progressiva (economia de mais de 5 MB de payload sem perda visual).
- **LCP Prioritário (Largest Contentful Paint)**: Pré-carregamento imediato (`fetchpriority="high"`) da imagem principal do Hero no `<head>`.
- **Renderização Assíncrona e Lazy Loading**: Atributos `loading="lazy"` e `decoding="async"` em todas as imagens fora do viewport inicial.
- **Rolagem Buttery-Smooth (60/120fps)**: Event listeners com `{ passive: true }` e `requestAnimationFrame` para evitar recálculos desnecessários e congelamentos de thread.
- **Aceleração por Hardware (GPU)**: Uso de transformações 3D e `containment` (`content-visibility: auto`) nas seções pesadas abaixo da dobra.
- **Responsividade Mobile Impecável**: 
  - Métricas do Hero organizadas em grid 2x2 harmonioso em telas compactas.
  - Abas de filtro com scroll horizontal fluido nativo sem quebra de linhas.
  - Tipografia fluida com `clamp()` para impedir cortes ou hifenizações indesejadas.
  - Botão flutuante de WhatsApp com animação suave e botão de volta ao topo automático.

---

## 📁 Estrutura de Arquivos

```
├── index.html              # Página principal completa, semântica e otimizada
├── assets/
│   ├── css/
│   │   ├── app.css         # Estilos base, utilitários e layout
│   │   └── home.css        # Estilos específicos da página inicial
│   ├── js/
│   │   ├── app.js          # Controladores de rolagem, máscara de telefone e menus
│   │   └── home.js         # Transições e slider inteligente do Hero
│   ├── images/
│   │   ├── about/          # Fotos da oficina e fundador
│   │   ├── cities/         # Imagens das cidades atendidas
│   │   ├── materials/      # Catálogo de chapas e amostras de rochas
│   │   ├── portfolio_hq/   # Fotos de destaque em alta definição
│   │   ├── projects_luxury/# Portfólio de ambientes executados
│   │   └── *.svg           # Logos oficiais da Marmoraria Ônix
│   └── data/               # Dados complementares estruturados
├── .gitignore              # Ignora arquivos temporários e de desenvolvimento
└── README.md               # Documentação técnica do projeto
```

---

## 🚀 Como Executar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador web moderno ou rodar um servidor HTTP local:

```bash
# Com Python 3
python -m http.server 8000

# Ou com Node.js (serve / npx live-server)
npx serve .
```

Acesse em seu navegador: `http://localhost:8000`.

---
© 2026 Marmoraria Ônix. Todos os direitos reservados.
