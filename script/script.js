const mobile = document.getElementById('mobile');
const close = document.getElementById('close');
const navbar = document.getElementById('navbar');

if (mobile) {
   mobile.addEventListener('click', () => {
        navbar.classList.add('active')
   })
}

if(close){
    close.addEventListener('click', () => {
        navbar.classList.remove('active')
    })
}

const container = document.getElementById('scroll-container');
        const scrollLeftButton = document.getElementById('scroll-left');
        const scrollRightButton = document.getElementById('scroll-right');

        container.addEventListener('scroll', () => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft >= maxScrollLeft) {
                scrollRightButton.disabled = true;
            } else {
                scrollRightButton.disabled = false;
            }
            if (container.scrollLeft <= 0) {
                scrollLeftButton.disabled = true;
            } else {
                scrollLeftButton.disabled = false;
            }
        });

        function scrollContainer(amount) {
            container.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
        }

        // Initial check to set button states on load
        container.dispatchEvent(new Event('scroll'));






  document.addEventListener('DOMContentLoaded', function() {
    fetch('https://friedenskirche-krefeld.github.io/json/articles.json')
      .then(response => response.json())
      .then(data => {
        const articlesContainer = document.getElementById('scroll-container');
        data.articles.forEach(article => {
          const articleElement = document.createElement('a');
          articleElement.href = article.href;
          articleElement.className = "article";

          const img = document.createElement('img');
          img.src = article.imageUrl;
          img.alt = "Artikel Bild";

          const title = document.createElement('h4');
          title.textContent = article.title;

          const subtitle = document.createElement('h5');
          subtitle.textContent = article.subtitle;

          const preview = document.createElement('p');
          preview.textContent = article.preview;

          articleElement.appendChild(img);
          articleElement.appendChild(title);
          articleElement.appendChild(subtitle);
          articleElement.appendChild(preview);

          articlesContainer.appendChild(articleElement);
        });
      })
      .catch(error => console.error('Beim Laden der Artikel ist folgender Fehler aufgetreten:', error));
  });

