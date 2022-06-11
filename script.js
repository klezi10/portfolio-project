// =====================================NAVBAR=============

const navbar = document.querySelector('.navbar');

navbar.innerHTML = `
<div class="container">
        <a class="navbar-brand nav-link" href="index.html" title="Homepage">Klesta</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav ms-auto">
            <a class="nav-link" href="index.html" title="Homepage"
              >Home</a
            >
            <a class="nav-link" href="/about.html" title="About Klesta"
              >About me</a
            >
            <a class="nav-link" href="/work.html" title="Klesta's Work">Work</a>
            <a
              class="nav-link"
              href="/contact.html"
              title="Contact Klesta"
              >Contact me</a
            >
          </div>
        </div>
      </div>
`;

function highlightCurrentURL() {
  let a = document.querySelector('#navbarNav').getElementsByTagName('a');
  for (let i = 0; i < a.length; i++) {
    if (a[i].href.split('#')[0] == document.location.href.split('#')[0]) {
      a[i].className = 'nav-link active';
    }
  }
}

window.onload = function () {
  highlightCurrentURL();
};

// ====== FOOTER =====

const footer = document.createElement('footer');
footer.innerHTML = `
<div class="contact-box justify-content-between d-none d-lg-flex">
        <div>
          <h4>Get in Touch</h4>
          <p class="text-muted">Have questions or want to work together</p>
        </div>
        <div>
          <a
            href="mailto:kles.code@gmail.com"
            class="btn btn-branding shadow mt-3"
            >Email me</a
          >
        </div>
      </div>
      <div class="contact-info" id="contact">
        
        <div class="social-links d-flex justify-content-center pb-4">
          <a
            href="https://github.com/klezi10"
            target="_blank"
            title="GitHub Profile"
            ><i class="fab fa-github"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/klestaluli/"
            target="_blank"
            title="LinkedIn Profile"
            ><i class="fab fa-linkedin"></i></i></a>
          <a href="mailto:kles.code@gmail.com" title="Email Klesta"
            ><i class="fas fa-at"></i
          ></a>
        </div>
        <p class="text-center">
          This project was coded by Klesta Luli | Hosted on AWS |
          <a
            href="https://github.com/klezi10/portfolio-project"
            title="GitHub"
            target="_blank"
            >Open-source</a
          >
        </p>
      </div>
`;
document.querySelector('.footer').append(footer);
