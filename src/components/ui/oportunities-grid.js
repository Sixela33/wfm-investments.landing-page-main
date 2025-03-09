import { Mail } from "~/src/utils/mail";
import onceMounted from "~/src/hooks/once-mounted";
import useContactForm from "~/src/hooks/use-contact-form";
import $ from "~/src/utils/query";
import "~/src/stylesheets/ui/oportunities-grid.css";

const OportunitiesGrid = () => {
  const {
    update: updateMailInfinity,
    getData: getDataMailInfinity,
    isReady: isReadyInfinity,
  } = useContactForm();
  const {
    update: updateMailDome,
    getData: getDataMailDome,
    isReady: isReadyDome,
  } = useContactForm();

  onceMounted(() => {
    const downloadInfinity = $("#download_infinity"),
      bubbleFormInfinity = $(".bubble__form__infinity");

    const allInputsInfinity =
      bubbleFormInfinity.querySelectorAll("input, textarea");

    const isValidInfinity = () =>
      Array.from(allInputsInfinity).every((input) => input.value.length > 0);

    allInputsInfinity.forEach((input) => {
      input.addEventListener("input", (e) => {
        downloadInfinity.setAttribute("data-ready", String(isValidInfinity()));
      });
    });

    // brochure form infinity
    const formBrochureInfinity = $(
        "#download_brochure_form[data-type='infinity']"
      ),
      inputsBrochureInfinity =
        formBrochureInfinity.querySelectorAll("input, textarea");

    inputsBrochureInfinity.forEach((input) => {
      input.addEventListener("input", (e) => {
        updateMailInfinity(e.target.name, e.target.value);
      });
    });

    downloadInfinity.onclick = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation();

      if (isReadyInfinity()) {
        const { name, lastname, cc, email, phone } = getDataMailInfinity();

        Mail.send({
          email: cc || email,
          name: `${email}`,
          subject: `Descarga de brochure | ${email}`,
          body: `Correo: ${email}\n---\nDescargó brochure Infinity`,
        }).catch(console.error);

        $("#link_infinity").click();

        // Reset
        setTimeout(() => {
          allInputsInfinity.forEach((input) => (input.value = ""));
          bubbleFormInfinity.setAttribute("aria-expanded", String(false));
          downloadInfinity.setAttribute("data-ready", String(false));
        }, 250);
        return;
      }

      const expanded =
        bubbleFormInfinity.getAttribute("aria-expanded") === "false";
      bubbleFormInfinity.setAttribute("aria-expanded", String(expanded));
    };

    const downloadDome = $("#download_dome"),
      bubbleFormDome = $(".bubble__form__dome");

    const allInputsDome = bubbleFormDome.querySelectorAll("input, textarea");

    const isValidDome = () =>
      Array.from(allInputsDome).every((input) => input.value.length > 0);

    allInputsDome.forEach((input) => {
      input.addEventListener("input", (e) => {
        downloadDome.setAttribute("data-ready", String(isValidDome()));
      });
    });

    // brochure form dome
    const formBrochureDome = $("#download_brochure_form[data-type='dome']"),
      inputsBrochureDome = formBrochureDome.querySelectorAll("input, textarea");

    inputsBrochureDome.forEach((input) => {
      input.addEventListener("input", (e) => {
        updateMailDome(e.target.name, e.target.value);
      });
    });

    downloadDome.onclick = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();
      ev.stopImmediatePropagation();

      if (isReadyDome()) {
        const { name, lastname, cc, email, phone } = getDataMailDome();

        Mail.send({
          email: cc || email,
          name: `${email}`,
          subject: `Descarga de brochure | ${email}`,
          body: `Correo: ${email}\n---\nDescargó brochure Dome`,
        }).catch(console.error);

        $("#link_dome").click();

        // Reset
        setTimeout(() => {
          allInputsDome.forEach((input) => (input.value = ""));
          bubbleFormDome.setAttribute("aria-expanded", String(false));
          downloadDome.setAttribute("data-ready", String(false));
        }, 250);
        return;
      }

      const expanded = bubbleFormDome.getAttribute("aria-expanded") === "false";
      bubbleFormDome.setAttribute("aria-expanded", String(expanded));
    };
  });

  return /*html*/ `
	<section class="oportunities__grid">
		<div class="oportunities__header">
			<h6 id="oportunities">También somos parte</h6>
      <p>En WFM colaboramos con constructoras como ADN y Grupo Portland, desarrollando proyectos en las zonas más prometedoras de Buenos Aires. Sé parte de esta oportunidad e invertí en edificios únicos con alta proyección de valor.</p>
			<div role="spacer"></div>
		</div>

		<div class="grid__container">
			<article>
				<figure>
					<img
						src="/pics/oportunity_infinity.jpg"
						width="800"
						height="800"
						alt="Infity Towers"
					/>
					<figcaption>
            <p>Entrega 2025</p>
					</figcaption>
				</figure>

				<div class="form__wrapper__download">
					<button type="button" id="download_infinity" data-disable="${isReadyInfinity()}" data-ready="false">
						Brochure
						<img src="/vector/download.svg" alt="download" width="22" height="22" />
					</button>
					<a href="/dowloads/INFINITY_TOWERS.pdf" id="link_infinity" download hidden></a>
				
					<form id="download_brochure_form" data-type="infinity" class="bubble__form__infinity" aria-expanded="false">
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
			</article>

			<article aria-disabled="true">
				<figure>
					<img
						src="/pics/oportunity_dome.jpg"
						width="800"
						height="800"
						alt="Dome Apartments"
					/>
					<figcaption>
						<p>Entrega 2029</p>
					</figcaption>
				</figure>

				<div class="form__wrapper__download">
					<button type="button" id="download_dome" data-disable="${isReadyDome()}" data-ready="false">
						Brochure
						<img src="/vector/download.svg" alt="download" width="22" height="22" />
					</button>
					<a href="/dowloads/DOME.pdf" id="link_dome" download hidden></a>
				
					<form id="download_brochure_form" data-type="dome" class="bubble__form__dome" aria-expanded="false">
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
			</article>
		</div>
	</section>
	`;
};

export default OportunitiesGrid;
