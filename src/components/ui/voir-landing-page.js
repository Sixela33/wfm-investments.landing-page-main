import onceMounted from "~/src/hooks/once-mounted";
import usePage from "~/src/hooks/use-page";
import useContactForm from "~/src/hooks/use-contact-form";
import { Mail } from "~/src/utils/mail";
import Header from "./header";
import $ from "~/src/utils/query";
import "~/src/stylesheets/ui/voir-landing-page.css";

const VoirLandingPage = () => {
  const { getVideo, getTags, getName, getBrochure } = usePage();

  const video = getVideo();
  const tags = getTags();
  const name = getName();
  const brochure = getBrochure();

  const { update /* submit */ } = useContactForm(`VOIR ${name}\n\n`);
  const {
    update: updateMail,
    getData: getDataMail,
    isReady,
  } = useContactForm();

  onceMounted(() => {
    const bubbleForm = $(`.bubble__form.brochure_1`);

    // redirect to top of page
    const downloadBrochureRedirect =
      document.querySelectorAll(".redirect_brochure");
    downloadBrochureRedirect.forEach((el) =>
      el.addEventListener("click", () => window.scrollTo(0, 0))
    );

    const downloadBrochure = document.querySelectorAll(
      ".download_brochure_button"
    );

    // const allInputs = bubbleForm.querySelectorAll("input, textarea");

    // const isValid = () =>
    //   Array.from(allInputs).every((input) => input.value.length > 0);

    // allInputs.forEach((input) => {
    //   input.addEventListener("input", (e) => {
    //     downloadBrochure.forEach((el) =>
    //       el.setAttribute("data-ready", String(isValid()))
    //     );
    //   });
    // });

    // brochure form
    const formBrochure = $("#download_brochure_form"),
      inputsBrochure = formBrochure.querySelectorAll("input, textarea");

    inputsBrochure.forEach((input) => {
      input.addEventListener("input", (e) => {
        updateMail(e.target.name, e.target.value);
      });
    });

    downloadBrochure.forEach((el) => {
      el.addEventListener("click", (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();

        if (isReady()) {
          const { name, lastname, cc, email, phone } = getDataMail();

          Mail.send({
            email: cc || email,
            name: `${email}`,
            subject: `Descarga de brochure | ${email}`,
            body: `Correo: ${email}\n---\nDescargó brochure ${getName()}`,
          }).catch(console.error);

          $("#download_brochure_link").click();

          // Reset
          setTimeout(() => {
            // allInputs.forEach((input) => (input.value = ""));
            bubbleForm.setAttribute("aria-expanded", String(false));
            el.setAttribute("data-ready", String(false));
          }, 250);
          return;
        }

        const expanded = bubbleForm.getAttribute("aria-expanded") === "false";
        bubbleForm.setAttribute("aria-expanded", String(expanded));
      });
    });

    // page contact form
    const pageContactForm = $("#page-contact-form"),
      inputs = pageContactForm.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        update(e.target.name, e.target.value);
      });
    });
  });

  return /*html*/ `
	${Header({ brochure })}
	<section class="voir__landing__page">
		<span class="bubble_actions">
			<a href="https://api.whatsapp.com/send?phone=5491149705025" target="_blank" role="whatsapp">
				<img src="/vector/whatsapp.svg" alt="whatsapp" width="23" height="23" />
			</a>
		</span>

		<div class="voir__landing__page__topinfo">
			<!-- <span role="back">
				<img src="/vector/arrow-back.svg" alt="arrow-back" />
				<a href="/#projects">Volver a proyectos</a>
			</span> -->
			<span role="logo">
				<img src="/vector/VOIR.logo.svg" alt="VOIR" />
				<h1>${name}</h1>
			</span>

			<div class="form__wrapper">
				<form id="page-contact-form">
					<div role="name">
						<label for="name">Nombre</label>
						<input type="text" id="name" name="name" placeholder="John" />
					</div>
					<div role="lastname">
						<label for="lastname">Apellido</label>
						<input type="text" id="lastname" name="lastname" placeholder="Wick" />
					</div>
					<div role="email">
						<label for="email">Correo</label>
						<input type="email" id="email" name="email" placeholder="tu@dominio.com" />
					</div>
					<div role="phone">
						<label for="phone">Celular</label>
						<div>
							<p>+54</p>
							<span></span>
							<input type="text" id="phone" name="phone" placeholder="11 1234 1234" />
						</div>
					</div>
					<div role="message">
						<label for="message">Mensaje</label>
						<textarea id="message" name="message" rows="5" placeholder="Deja tu mensaje..."></textarea>
					</div>
					<button type="submit">Contactar</button>
				</form>
			</div>
		</div>


		<div class="voir__landing__page__content">
			<div class="voir__landing__page__loop">
				<video src="${video}" autoplay muted loop playsinline></video>
				<!-- <img src="/textures/noise.png" /> -->
			</div>

			<ul class="voir__landing__page__content__list">
				<li>
					<img src="/vector/calendar-dark.svg" alt="calendar" width="20" height="20" />
					<b>Entrega</b>
					<p>${tags.period}</p>
				</li>
				<li>
					<img src="/vector/building-dark.svg" alt="building" width="20" height="20" />
					<b>Ambientes</b>
					<p>${tags.environments}</p>
				</li>
				<li>
					<img src="/vector/state-dark.svg" alt="state" width="20" height="20" />
					<b>Estado</b>
					<p>${tags.state}</p>
				</li>
				<li>
					<img src="/vector/location-dark.svg" alt="location" width="20" height="20" />
					<b>Ubicación</b>
					<p>${tags.location}</p>
				</li>
			</ul>
		</div>
	</section>`;
};

export default VoirLandingPage;
