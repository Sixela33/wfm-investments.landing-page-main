import onceMounted from "~/src/hooks/once-mounted";
import useContactForm from "~/src/hooks/use-contact-form";
import $ from "~/src/utils/query";
import "~/src/stylesheets/ui/footer.css";

const Footer = () => {
  const { update, submit } = useContactForm();

  onceMounted(() => {
    const form = $("#contact-form"),
      inputs = form.querySelectorAll("input, textarea");

    inputs.forEach((input) => {
      input.addEventListener("input", (e) => {
        update(e.target.name, e.target.value);
      });
    });

    form.addEventListener("submit", submit);
  });

  return /*html*/ `
	<footer class="global__footer">
		<section class="footer__wrapper">
			<section class="footer__top">
				<h2>Conectamos para construir el futuro</h2>
	
				<div class="footer__list">
					<h6>Navegación rápida</h6>
					<ul>
						<li><a href="/voir/suites">Voir Suites</a></li>
						<li><a href="/voir/amenabar">Voir Amenábar</a></li>
						<li><a href="/voir/palpa">Voir Palpa</a></li>
						<li><a href="/voir/cespedes">Live Voir Céspedes</a></li>
					</ul>
				</div>

				<div class="row">
					<a href="https://api.whatsapp.com/send?phone=5491149705025" target="_blank" role="button">
						<img src="/vector/whatsapp.svg" alt="whatsapp" />
					</a>
					<a href="https://www.instagram.com/wfm.investments/" target="_blank" role="button">
						<img src="/vector/instagram.svg" alt="instagram" />
					</a>
					<a href="https://www.facebook.com/WFMinvestments" target="_blank" role="button">
						<img src="/vector/facebook.svg" alt="facebook" />
					</a>
				</div>
			</section>
	
			<section class="footer__middle">
				<div class="footer__list">
					<ul>
						<li>
							<img src="/vector/location.svg" alt="location" />
							<a href="https://www.google.com.ar/maps/place/Av.+del+Libertador+264,+B1638+Vicente+L%C3%B3pez,+Provincia+de+Buenos+Aires/@-34.532023,-58.4689734,17z/data=!4m16!1m9!3m8!1s0x95bcb6af4f087d41:0xce0e216d324219d7!2sAv.+del+Libertador+264,+B1638+Vicente+L%C3%B3pez,+Provincia+de+Buenos+Aires!3b1!8m2!3d-34.5321057!4d-58.4693111!10e5!16s%2Fg%2F11r_gt5bzv!3m5!1s0x95bcb6af4f087d41:0xce0e216d324219d7!8m2!3d-34.5321057!4d-58.4693111!16s%2Fg%2F11r_gt5bzv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
								Av. del Libertador 264, 4to contra frente, Vicente López, PBA
							</a>
						</li>
						<li>
							<img src="/vector/cellphone.svg" alt="cellphone" />
							<a href="tel:+5491149705025">+54 9 11 4970 5025</a>
						</li>
						<li role="email">
							<img src="/vector/email.svg" alt="email" />
							<a href="mailto:info@wfm.com.ar">info@wfm.com.ar</a>
						</li>
					</ul>
				</div>
	
				<form id="contact-form">
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
			</section>
		</section>

		<section class="footer__bottom">
			<a href="/">
				<img src="/vector/wfm-logo.svg" alt="WFM Investments" width="auto" height="25" />
			</a> 
			<p>2024 © WFM Investments</p>
		</section>
	</footer>`;
};

export default Footer;
