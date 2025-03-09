import "~/src/stylesheets/ui/landing-page.css";

const LandingPage = () => {
  return /*html*/ `
	<section class="landing__page" style="background-image: url('/pics/landing-page.jpg?quality=50');">
		<span>
			<h1>Espacios únicos<br/>
			<i>diseñados para vos.</i></h1>
		</span>

		<div class="landing__page_sroll_down">
			<button type="button" id="go-to-projects">
				<img src="/vector/arrow-down.svg" alt="arrow-down" />
				<img id="spiral" src="/pics/spiral-projects.webp" alt="spiral-projects" />
			</button>
		</div>

		<a href="https://api.whatsapp.com/send?phone=5491149705025" target="_blank" role="whatsapp">
			<img src="/vector/whatsapp.svg" alt="whatsapp" width="23" height="23" />
		</a>

		<!-- <img class="noise_texture" src="/textures/noise.png" /> -->
	</section>`;
};

export default LandingPage;
