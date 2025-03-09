import onceMounted from "~/src/hooks/once-mounted";
import { BODY_SCHEMA } from "~/src/constants/body-schema";
import $ from "~/src/utils/query";
import "~/src/stylesheets/ui/header.css";

const Header = (props) => {
  const storedData = JSON.parse(
    localStorage.getItem("wfm:body_form") ?? JSON.stringify({ ...BODY_SCHEMA })
  );
  const isReady = storedData.email.length > 0;

  onceMounted(() => {
    const fixedHeader = $("#fixed-header");

    document.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 100) {
        fixedHeader.setAttribute("data-open", "true");
      } else {
        fixedHeader.setAttribute("data-open", "false");
      }
    });

    const modal = $(".nav-modal"),
      openModal = document.querySelectorAll(".burger-menu"),
      closeModal = $(".close-modal"),
      links = document.querySelectorAll(".nav-modal nav ul li a");

    closeModal.onclick = () => (modal.style.display = "none");
    openModal.forEach((btn) => {
      btn.addEventListener("click", () => (modal.style.display = "flex"));
    });
    links.forEach((link) =>
      link.addEventListener("click", () => (modal.style.display = "none"))
    );

    // redirect to bottom of page
    const contactButtons = document.querySelectorAll(".contact-button");
    contactButtons.forEach((el) =>
      el.addEventListener("click", () => window.scrollTo(0, 9999))
    );
  });

  return /*html*/ `
	<header class="global__header">
		<nav>
			<ul>
				<li><a href="/#projects">Proyectos</a></li>
				<!-- <li><a href="/#oportunities">Oportunidades</a></li>	  -->
				<li>■</li>	
				<li><a href="/aboutus">Nosotros</a></li>	 
			</ul>
		</nav>

		<button class="burger-menu" type="button">
			<img src="/vector/burger-light.svg" width="26" height="auto" alt="burger" />
		</button>
			
		<a href="/">
			<img src="/vector/wfm-logo.svg" width="120" height="auto" alt="logo" />
		</a>

		<div class="buttons__wrapper">
			${
        props?.brochure
          ? /*html*/ `
				<div class="form__wrapper__download">
				<button type="button" class="download_brochure_button" data-order="1" data-disable="${isReady}" data-ready="false">
					Brochure
					<img src="/vector/download.svg" alt="download" width="22" height="22" />
				</button>
				<a href="${props?.brochure}" id="download_brochure_link" download hidden></a>
				
				<form id="download_brochure_form" class="bubble__form brochure_1" aria-expanded="false">
					<strong>Completá el formulario para conocer más sobre el proyecto</strong>
	
					<!-- <div role="name">
						<label for="name">Nombre</label>
						<input type="text" id="name" name="name" placeholder="John" />
					</div>
					<div role="lastname">
						<label for="lastname">Apellido</label>
						<input type="text" id="lastname" name="lastname" placeholder="Wick" />
					</div> -->
					<div role="email">
						<label for="email">Correo</label>
						<input type="email" id="email" name="email" placeholder="tu@dominio.com" />
					</div>
					<!-- <div role="phone">
						<label for="phone">Celular</label>
						<div>
							<p>+54</p>
							<span></span>
							<input type="text" id="phone" name="phone" placeholder="11 1234 1234" />
						</div>
					</div> -->
				</form>
				</div>
				`
          : ""
      }
			
			<button class="contact-button" type="button">
				<p>Contactar</p>
				<img src="/vector/email-black.svg" width="22" height="22" alt="Contactar" />
			</button>
		</div>
	</header>

	<header class="global__fixed__header" data-open="false" id="fixed-header">
		<nav>
			<ul>
				<li><a href="/#projects">Proyectos</a></li>
				<!-- <li><a href="/#oportunities">Oportunidades</a></li>	  -->
				<li>■</li>	
				<li><a href="/aboutus">Nosotros</a></li>	 
			</ul>
		</nav>

		<button type="button" class="burger-menu">
			<img src="/vector/burger-dark.svg" width="26" height="auto" alt="burger" />
		</button>
			
		<a href="/">
			<img src="/vector/wfm-logo-black.svg" width="120" height="auto" alt="logo" />
		</a>

		<div class="buttons__wrapper">
		${
      props?.brochure
        ? /*html*/ `
				<div class="form__wrapper__download">
				<button type="button" class="download_brochure_button redirect_brochure">
					Brochure
					<img src="/vector/download.svg" alt="download" width="22" height="22" />
				</button>
				</div>
				`
        : ""
    }
			<button class="contact-button" type="button">
				<p>Contactar</p>
				<img src="/vector/email-white.svg" width="22" height="22" alt="Contactar" />
			</button>
		</div>
	</header>
	
	<div class="nav-modal" style="display: none;">
		<button type="button" class="close-modal">
			<img src="/vector/times.svg" width="26" height="auto" alt="close-modal" />
		</button>
		<nav>
			<ul>
				<li><a href="/#projects">Proyectos</a></li>
				<!-- <li><a href="/#oportunities">Oportunidades</a></li> -->
				<li><a href="/aboutus">Nosotros</a></li>
			</ul>
		</nav>
	</div>`;
};

export default Header;
