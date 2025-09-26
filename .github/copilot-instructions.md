# Copilot Instructions for AI Agents

## Visão Geral do Projeto
Este projeto é uma biblioteca digital simples baseada em HTML/CSS, hospedando eBooks em PDF e imagens de capa. Não há backend, build system ou scripts automatizados. O foco é a apresentação visual e organização dos arquivos.

## Estrutura de Pastas
- `ebooks/`: Contém todos os arquivos PDF dos livros.
- `imagens/`: Contém imagens de capa dos livros, com nomes correspondentes aos PDFs.
- `index.html`: Página principal, implementa toda a lógica e layout do site.

## Convenções e Padrões
- Os nomes dos arquivos de imagem e PDF devem ser semelhantes para facilitar a associação (exemplo: `A Arte da Guerra original- Sun Tzu.pdf` e `A Arte da Guerra original- Sun Tzu.webp`).
- Utilize apenas HTML e CSS embutido. Não há uso de JavaScript.
- O design utiliza variáveis CSS para cores e temas.
- O layout é responsivo e utiliza Flexbox.
- Ícones são carregados via CDN do Font Awesome.

## Fluxo de Trabalho
- Para adicionar um novo livro: coloque o PDF em `ebooks/` e a imagem de capa em `imagens/`, seguindo o padrão de nomes.
- Atualize o `index.html` para incluir o novo livro na listagem, seguindo o padrão visual existente.
- Não há testes automatizados ou comandos de build.

## Exemplos de Padrão
- Para cada livro, adicione um bloco HTML semelhante aos existentes, associando corretamente o PDF e a imagem.
- Mantenha a consistência visual e de nomenclatura.

## Dicas para Agentes
- Não tente adicionar scripts, frameworks ou lógica dinâmica.
- Priorize acessibilidade e responsividade.
- Consulte o início do `index.html` para variáveis de cor e layout.

## Arquivos-Chave
- `index.html`: Único ponto de edição para interface e listagem de livros.
- `ebooks/`, `imagens/`: Diretórios de conteúdo estático.

Se necessário, peça exemplos de blocos de livros ou esclarecimentos sobre padrões visuais.