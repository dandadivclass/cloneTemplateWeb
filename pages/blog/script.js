
const tituloBlog = ['How to Prepare for your First consumer focused program', 'Understanding IT marketplaces', 'Bringing home IOT', 'How to Prepare for your First consumer focused program', 'Understanding IT marketplaces'];
const imagemBlog = ['/assets/b2.jpg', '/assets/b1.jpg', '/assets/b3.jpg', '/assets/b4.jpg', '/assets/b5.jpg']
const loremBlog = ['One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.', "The soil of a man's heart is stonier, Louis. A man grows what he can, and he tends it. Because what you buy, is what you own.", 'This inhuman place makes human monsters. All work and no play makes Jack a dull boy. The hotel was alive. At least he tought it was.', 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.', "The soil of a man's heart is stonier, Louis. A man grows what he can, and he tends it. Because what you buy, is what you own."];
const readMore = ['Read More'];

const cardsBlog = document.querySelector('.cards-chamadas-blog');

for (let i = 0; i < 5; i++) {
    const divCardsBlogPosts = document.createElement('div');
    divCardsBlogPosts.className = ('post-blog d-flex flex-column justify-content-center align-items-center w-100 m-0 p-0');
    divCardsBlogPosts.innerHTML = `
        <div class="capa-imagem-blog">
            <img class="imagem-blog rounded-4" src="${imagemBlog[i]}" alt="imagens de pessoas trabalhando em seus notebooks">
        </div>
        <div class="textos-blog">
            <div class="card card-blog rounded-0 border-0" style="width: 20rem; height: 12rem ;">
                <div class="card-body">
                    <p class="card-date mb-1"><i class="fa-solid fa-calendar-days" style="color: #da3030;"></i> July 27, 2024 <i class="fa-solid fa-comment" style="color: #da3030;"></i> 1 comment</p>
                    <h6 class="card-titulo fw-bold">${tituloBlog[i]}</h6>
                    <p class="card-text mb-2">${loremBlog[i]}</p>
                    <a class="blog-a text-decoration-none" href="#">${readMore}</a>
                </div>
            </div>
        </div>
    `;

    cardsBlog.appendChild(divCardsBlogPosts);
}