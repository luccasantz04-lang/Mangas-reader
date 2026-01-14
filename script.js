const mangaData = [
    {
        id: 1,
        title: "One Piece",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=One+Piece",
        rating: 4.9,
        chapters: 1100,
        status: "Em andamento",
        genres: ["Ação", "Aventura", "Fantasia"],
        description: "Acompanhe Monkey D. Luffy e sua tripulação em busca do tesouro lendário One Piece para se tornar o Rei dos Piratas."
    },
    {
        id: 2,
        title: "Naruto",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Naruto",
        rating: 4.8,
        chapters: 700,
        status: "Completo",
        genres: ["Ação", "Aventura", "Sobrenatural"],
        description: "A história de Naruto Uzumaki, um jovem ninja que busca reconhecimento e sonha em se tornar o Hokage de sua vila."
    },
    {
        id: 3,
        title: "Attack on Titan",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Attack+on+Titan",
        rating: 4.9,
        chapters: 139,
        status: "Completo",
        genres: ["Ação", "Drama", "Fantasia"],
        description: "A humanidade vive cercada por muros gigantes para se proteger dos Titãs, criaturas humanoides gigantes que devoram humanos."
    },
    {
        id: 4,
        title: "My Hero Academia",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=My+Hero+Academia",
        rating: 4.7,
        chapters: 405,
        status: "Em andamento",
        genres: ["Ação", "Aventura", "Sobrenatural"],
        description: "Em um mundo onde quase todos possuem superpoderes, Izuku Midoriya sonha em se tornar o maior herói."
    },
    {
        id: 5,
        title: "Death Note",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Death+Note",
        rating: 4.9,
        chapters: 108,
        status: "Completo",
        genres: ["Sobrenatural", "Drama", "Suspense"],
        description: "Light Yagami encontra um caderno sobrenatural que mata qualquer pessoa cujo nome seja escrito nele."
    },
    {
        id: 6,
        title: "Demon Slayer",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Demon+Slayer",
        rating: 4.8,
        chapters: 205,
        status: "Completo",
        genres: ["Ação", "Aventura", "Sobrenatural"],
        description: "Tanjiro Kamado se torna um caçador de demônios após sua família ser massacrada e sua irmã transformada em demônio."
    },
    {
        id: 7,
        title: "Tokyo Ghoul",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Tokyo+Ghoul",
        rating: 4.6,
        chapters: 143,
        status: "Completo",
        genres: ["Ação", "Drama", "Sobrenatural"],
        description: "Ken Kaneki se torna meio-ghoul após um acidente e precisa aprender a viver entre dois mundos."
    },
    {
        id: 8,
        title: "Jujutsu Kaisen",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Jujutsu+Kaisen",
        rating: 4.8,
        chapters: 248,
        status: "Em andamento",
        genres: ["Ação", "Sobrenatural", "Fantasia"],
        description: "Yuji Itadori se junta a uma escola secreta de feiticeiros para matar a poderosa Maldição em que se transformou."
    },
    {
        id: 9,
        title: "Fullmetal Alchemist",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=FMA",
        rating: 4.9,
        chapters: 108,
        status: "Completo",
        genres: ["Ação", "Aventura", "Fantasia"],
        description: "Dois irmãos alquimistas buscam a Pedra Filosofal para restaurar seus corpos após uma transmutação humana fracassada."
    },
    {
        id: 10,
        title: "Bleach",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Bleach",
        rating: 4.7,
        chapters: 686,
        status: "Completo",
        genres: ["Ação", "Aventura", "Sobrenatural"],
        description: "Ichigo Kurosaki obtém os poderes de um Ceifador de Almas e assume a responsabilidade de defender os humanos dos espíritos malignos."
    },
    {
        id: 11,
        title: "Spy x Family",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Spy+x+Family",
        rating: 4.8,
        chapters: 95,
        status: "Em andamento",
        genres: ["Comédia", "Ação", "Slice of Life"],
        description: "Um espião, uma assassina e uma telepata formam uma família falsa para cumprir suas respectivas missões secretas."
    },
    {
        id: 12,
        title: "Chainsaw Man",
        cover: "https://via.placeholder.com/200x280/1a1a1a/e50914?text=Chainsaw+Man",
        rating: 4.7,
        chapters: 179,
        status: "Em andamento",
        genres: ["Ação", "Sobrenatural", "Drama"],
        description: "Denji funde-se com seu demônio de estimação Pochita e se torna o Homem Motosserra para pagar suas dívidas."
    }
];

function renderMangas(mangas, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    mangas.forEach(manga => {
        const card = document.createElement('div');
        card.className = 'manga-card';
        card.onclick = () => openModal(manga);
        
        card.innerHTML = `
            <img class="manga-card-cover" src="${manga.cover}" alt="${manga.title}">
            <div class="manga-card-info">
                <div class="manga-card-title">${manga.title}</div>
                <div class="manga-card-meta">
                    <span class="rating">★ ${manga.rating}</span>
                    <span>${manga.chapters} caps</span>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function openModal(manga) {
    const modal = document.getElementById('mangaModal');
    document.getElementById('modalCover').src = manga.cover;
    document.getElementById('modalTitle').textContent = manga.title;
    document.getElementById('modalGenres').textContent = manga.genres.join(' • ');
    document.getElementById('modalDescription').textContent = manga.description;
    document.getElementById('modalRating').textContent = `★ ${manga.rating}`;
    document.getElementById('modalChapters').textContent = `${manga.chapters} Capítulos`;
    document.getElementById('modalStatus').textContent = manga.status;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('mangaModal').style.display = 'none';
}

document.querySelector('.close').onclick = closeModal;

window.onclick = function(event) {
    const modal = document.getElementById('mangaModal');
    if (event.target == modal) {
        closeModal();
    }
}

function searchMangas() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = mangaData.filter(manga => 
        manga.title.toLowerCase().includes(searchTerm) ||
        manga.genres.some(genre => genre.toLowerCase().includes(searchTerm))
    );
    
    renderMangas(filtered, 'popularMangas');
    
    if (filtered.length === 0) {
        document.getElementById('popularMangas').innerHTML = 
            '<p style="color: var(--text-secondary); text-align: center; width: 100%;">Nenhum mangá encontrado.</p>';
    }
}

document.getElementById('searchBtn').addEventListener('click', searchMangas);
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchMangas();
    }
});

document.querySelectorAll('.genre-tag').forEach(tag => {
    tag.addEventListener('click', function() {
        document.querySelectorAll('.genre-tag').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const genre = this.dataset.genre;
        const filtered = mangaData.filter(manga => 
            manga.genres.some(g => g.toLowerCase() === genre)
        );
        
        renderMangas(filtered, 'popularMangas');
    });
});

const popularMangas = mangaData.slice(0, 8);
renderMangas(popularMangas, 'popularMangas');

const recentMangas = [...mangaData].sort(() => Math.random() - 0.5).slice(0, 8);
renderMangas(recentMangas, 'recentMangas');
