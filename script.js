let mostrandoFavoritos = false;

function toggleShowFavoritos() {
    mostrandoFavoritos = !mostrandoFavoritos;
    renderEbooks();
    const btn = document.getElementById('showFavBtn');
    btn.textContent = mostrandoFavoritos ? 'Mostrar Todos' : 'Meus Favoritos';
    btn.innerHTML = `<i class="fas fa-heart"></i> ${btn.textContent}`;
}

// Filtro dinâmico enquanto digita
function liveFilterBooks() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredEbooks = ebooks.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.genre.toLowerCase().includes(searchTerm)
    );
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = '';
    const userLogged = !!localStorage.getItem('userEmail');
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    if (filteredEbooks.length === 0) {
        booksContainer.innerHTML = `
            <div class="no-results">
                <p>Nenhum livro encontrado para "${searchTerm}". Tente outro termo de busca.</p>
            </div>
        `;
        return;
    }
    filteredEbooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        let favBtn = '';
        if (userLogged) {
            const isFav = favoritos.includes(book.title);
            favBtn = `<button class="btn btn-fav" onclick="toggleFavorito('${book.title.replace(/'/g, '\'')}', this)" title="Favoritar"><i class="fa${isFav ? 's' : 'r'} fa-heart" style="color:${isFav ? '#f44336' : '#aaa'}"></i></button>`;
        }
        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${book.cover}" alt="Capa do livro: ${book.title}">
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-genre">${book.genre}</div>
                <div class="book-actions">
                    <button class="btn btn-read" onclick="openReader('${book.readUrl}', '${book.title}')">Ler Online</button>
                    ${favBtn}
                    <a href="${book.downloadUrl}" download="${book.title}.pdf" class="btn btn-download">Download</a> 
                </div>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    });
}

// Ao clicar em pesquisar, filtra e rola até o catálogo
function searchBooksAndScroll() {
    liveFilterBooks();
    document.getElementById('catalogo').scrollIntoView({ behavior: 'smooth' });
}

// Dados simulados de ebooks
const ebooks = [
    {
        title: "As 48 Leis do Poder", // Título do livro
        author: "Robert Greene", // Autor do livro
        genre: "Livro de autoajuda", // Gênero do livro
        cover: "./imagens/As 48 leis do poder (Robert Greene).png", // Img da capa do livro
        readUrl: "./ebooks/As 48 leis do poder (Robert Greene).pdf", // Pdf para ler o livro
        downloadUrl: "./ebooks/As 48 leis do poder (Robert Greene).pdf" // Pdf para baixar o livro
    },
    {
        title: "Carta Ao Rei",
        author: "Pero Vaz de Caminha",
        genre: "Literatura Brasileira",
        cover: "./imagens/Carta Ao Rei - Pero Vaz de Caminha.jpg",
        readUrl: "./ebooks/Carta Ao Rei - Pero Vaz de Caminha.pdf",
        downloadUrl: "./ebooks/Carta Ao Rei - Pero Vaz de Caminha.pdf"
    },
    {
        title: "A casa",
        author: "Vinicius de Moraes",
        genre: "Literatura Brasileira",
        cover: "./imagens/a casa.jpg",
        readUrl: "./ebooks/a casa -  vinicius de moraes.pdf",
        downloadUrl: "./ebooks/a casa -  vinicius de moraes.pdf"
    },
    {
        title: "A Arte da Guerra",
        author: "Sun Tzu",
        genre: "Estratégia Militar",
        cover: "./imagens/A Arte da Guerra original- Sun Tzu.webp",
        readUrl: "./ebooks/A Arte da Guerra original- Sun Tzu.pdf",
        downloadUrl: "./ebooks/A Arte da Guerra original- Sun Tzu.pdf"
    },
    {
        title: "Como fazer amigos e influenciar pessoas",
        author: "Dale Carnegie",
        genre: "Livro de autoajuda",
        cover: "./imagens/como_fazer_amigos_e_influenciar_pessoas.png",
        readUrl: "./ebooks/como_fazer_amigos_e_influenciar_pessoas.pdf",
        downloadUrl: "./ebooks/como_fazer_amigos_e_influenciar_pessoas.pdf"
    },
    {
        title: "Love",
        author: "Stephen King",
        genre: "Romance",
        cover: "./imagens/Love - Stephen King.jpg",
        readUrl: "./ebooks/Love - Stephen King.pdf",
        downloadUrl: "./ebooks/Love - Stephen King.pdf"
    },
    {
        title: "Os Segredos da Mente Milionária",
        author: "T. Harv Eker",
        genre: "Livro de autoajuda",
        cover: "./imagens/Os Segredos da Mente Milionaria.jpeg",
        readUrl: "./ebooks/Os Segredos da Mente Milionaria.pdf",
        downloadUrl: "./ebooks/Os Segredos da Mente Milionaria.pdf"
    },
    {
        title: "Os Segredos do Lobo",
        author: "Jordan Belfort",
        genre: "Livro de autoajuda",
        cover: "./imagens/OS SEGREDOS DO LOBO - JORDAN BELFORT.png",
        readUrl: "./ebooks/OS SEGREDOS DO LOBO - JORDAN BELFORT.pdf",
        downloadUrl: "./ebooks/OS SEGREDOS DO LOBO - JORDAN BELFORT.pdf"
    },
    {
        title: "As Armas da Persuasão",
        author: "Robert",
        genre: "Livro de autoajuda",
        cover: "./imagens/As Armas Da Persuasão - Robert.jpeg",
        readUrl: "./ebooks/As Armas Da Persuasão - Robert.pdf",
        downloadUrl: "./ebooks/As Armas Da Persuasão - Robert.pdf"
    },
    {
        title: "Mais tempo, mais dinheiro",
        author: "Christian Barbosa",
        genre: "Livro de autoajuda",
        cover: "./imagens/Mais tempo, mais dinheiro - Christian Barbosa.jpeg",
        readUrl: "./ebooks/Mais tempo, mais dinheiro - Christian Barbosa.pdf",
        downloadUrl: "./ebooks/Mais tempo, mais dinheiro - Christian Barbosa.pdf"
    },
    {
        title: "O Poder da Ação",
        author: "Paulo Vieira",
        genre: "Livro de autoajuda",
        cover: "./imagens/O Poder da Ação - Paulo Vieira.jpeg",
        readUrl: "./ebooks/O Poder da Ação - Paulo Vieira.pdf",
        downloadUrl: "./ebooks/O Poder da Ação - Paulo Vieira.pdf"
    },
    {
        title: "O Poder da Persuasão",
        author: "Robert B. Cialdini",
        genre: "Livro de autoajuda",
        cover: "./imagens/O Poder da Persuasão - Robert B Cialdini.jpg",
        readUrl: "./ebooks/O Poder da Persuasão - Robert B Cialdini.pdf",
        downloadUrl: "./ebooks/O Poder da Persuasão - Robert B Cialdini.pdf"
    },
    {
        title: "Pai Rico Pai Pobre",
        author: "Robert T. Kiyosaki",
        genre: "Finanças Pessoais",
        cover: "./imagens/Pai Rico  Pai Pobre - Robert T. Kiyosaki.jpeg",
        readUrl: "./ebooks/Pai Rico  Pai Pobre - Robert T. Kiyosaki.pdf",
        downloadUrl: "./ebooks/Pai Rico  Pai Pobre - Robert T. Kiyosaki.pdf"
    },
];

// Renderiza os ebooks na página
function renderEbooks() {
    const booksContainer = document.getElementById('booksContainer');
    booksContainer.innerHTML = '';
    const userLogged = !!localStorage.getItem('userEmail');
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    ebooks.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        let favBtn = '';
        if (userLogged) {
            const isFav = favoritos.includes(book.title);
            favBtn = `<button class="btn btn-fav" onclick="toggleFavorito('${book.title.replace(/'/g, '\'')}', this)" title="Favoritar"><i class="fa${isFav ? 's' : 'r'} fa-heart" style="color:${isFav ? '#f44336' : '#aaa'}"></i></button>`;
        }
        bookCard.innerHTML = `
            <div class="book-cover">
                <img src="${book.cover}" alt="Capa do livro: ${book.title}">
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-genre">${book.genre}</div> 
                <div class="book-actions">
                    <button class="btn btn-read" onclick="openReader('${book.readUrl}', '${book.title}')">Ler Online</button>
                    ${favBtn}
                    <a href="${book.downloadUrl}" download="${book.title}.pdf" class="btn btn-download">Download</a>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    });
}

// Função para favoritar/desfavoritar
function toggleFavorito(titulo, btn) {
    let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const idx = favoritos.indexOf(titulo);
    if (idx === -1) {
        favoritos.push(titulo);
    } else {
        favoritos.splice(idx, 1);
    }
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    renderEbooks();
}

// Atualiza a seção do usuário com base no estado de login
function openReader(pdfUrl, title) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('pdfViewer').src = pdfUrl;
    document.getElementById('readerModal').style.display = 'flex';
}

// Fecha o modal do leitor de PDF
function closeModal() {
    document.getElementById('readerModal').style.display = 'none';
    document.getElementById('pdfViewer').src = 'about:blank';
}

// Atualiza a seção do usuário com base no estado de login
function searchBooks() {
    // Função antiga mantida para compatibilidade, mas não usada mais
    liveFilterBooks();
}

// Navegação suave e destaque do link ativo
function showSection(sectionId) {
    
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    
    event.target.classList.add('active');
    
    
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    
    
    if (window.innerWidth <= 768) {
        document.getElementById('menu').classList.remove('show');
    }
}

// Menu móvel
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Funções para abrir e fechar modais de login e registro
function openRegisterModal() {
    document.getElementById('registerModal').style.display = 'flex';
}

// Função para abrir o modal de login
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}


function closeModals() {
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'none';
}


function switchToLogin() {
    document.getElementById('registerModal').style.display = 'none';
    document.getElementById('loginModal').style.display = 'flex';
}

function switchToRegister() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'flex';
}

// Função de logout
function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPassword');
    updateUserSection();
    alert('Logout realizado com sucesso!');
}

// Fecha modais ao clicar fora deles
window.onclick = function(event) {
    const readerModal = document.getElementById('readerModal');
    const registerModal = document.getElementById('registerModal');
    const loginModal = document.getElementById('loginModal');
    
    if (event.target === readerModal) {
        closeModal();
    }
    if (event.target === registerModal || event.target === loginModal) {
        closeModals();
    }
};

// Manipulação do formulário de registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', name);
    localStorage.setItem('userPassword', password);
    
    alert('Cadastro realizado com sucesso!');
    closeModals();
    updateUserSection();
});

// Manipulação do formulário de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');
    
    if (email === storedEmail && password === storedPassword) {
        alert('Login realizado com sucesso!');
        closeModals();
        updateUserSection();
    } else {
        alert('E-mail ou senha incorretos!');
    }
});

// Atualiza a seção do usuário no cabeçalho
function updateUserSection() {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    
    if (userName && userEmail) {
        document.getElementById('userActions').style.display = 'none';
        document.getElementById('userWelcome').style.display = 'flex';
        document.getElementById('userName').textContent = userName;
        document.getElementById('userAvatar').textContent = userName.charAt(0).toUpperCase();
    } else {
        document.getElementById('userActions').style.display = 'flex';
        document.getElementById('userWelcome').style.display = 'none';
    }
    renderEbooks(); // Atualiza exibição dos botões de favorito
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderEbooks();
    updateUserSection();
});