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
            >Contact me</a
          >
        </div>
      </div>
      <div class="contact-info" id="contact">
        <div class="d-flex justify-content-center mb-5">
          <a
            href="mailto:kles.code@gmail.com"
            class="email-link"
            title="Email Klesta"
            >kles.code@gmail.com</a
          >
        </div>
        <div class="social-links d-flex justify-content-center pb-5">
          <a
            href="https://github.com/klezi10"
            target="_blank"
            title="GitHub Profile"
            ><i class="fab fa-github"></i
          ></a>
          <a
            href="https://www.linkedin.com"
            target="_black"
            title="LinkedIn Profile"
            ><i class="fab fa-linkedin"></i
          ></a>
          <a href="mailto:kles.code@gmail.com" title="Email Klesta"
            ><i class="fas fa-at"></i
          ></a>
        </div>
        <p class="text-center">
          This project was coded by Klesta Luli |
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
