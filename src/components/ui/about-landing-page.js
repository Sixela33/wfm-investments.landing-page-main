import "~/src/stylesheets/ui/about-landing-page.css";

const AboutLandingPage = () => {
  return /*html*/ `
	<section class="about__landing__page">
		<div>
			<span>
				<img src="/pics/logo.xl.webp" alt="WFM Investments" />
				<h3>Investments</h3>
			</span>

			<div class="about__landing__page__content">
				<p>WFM Investments es una empresa desarrolladora de emprendimientos inmobiliarios fruto de la colaboración estratégica entre tres familias. Nuestra experiencia y conocimiento en el sector nos permite crear proyectos sólidos y confiables. Nuestra trayectoria, junto con nuestro firme compromiso y la calidad de nuestro trabajo, nos convierte en la mejor opción para quienes buscan soluciones inmobiliarias confiables y de excelencia.</p>
				<p>Construimos con la solidez de nuestra trayectoria. Compromiso y excelencia en cada paso de tu inversión. Nuestra trayectoria nos permite construir con solidez y confianza en cada nuevo desafío.</p>
			</div>
		</div>
		<img src="/pics/about-landing-page.webp" alt="about-landing-page" />
	</section>`;
};

export default AboutLandingPage;
