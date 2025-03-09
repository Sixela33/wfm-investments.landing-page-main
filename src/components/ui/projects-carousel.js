import "~/src/stylesheets/ui/projects-carousel.css";

const ProjectsCarousel = () => {
  return /*html*/ `
	<section class="projects__carousel">
		<div class="carousel__header">
			<h6 id="projects">Encontrá tu proyecto ideal</h6>
		</div>

		<div class="carousel__container">
			<div id="carousel-wrapper" class="carousel__wrapper">
				<div class="carousel">
					<a href="/voir/suites">
						<figure>
							<img
								src="/pics/voir_suites.webp"
								width="480"
								height="720"
								alt="portrait-1"
							/>
							<figcaption>
								<span>
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Suites</p>
								</span>
								<span>
									<b>Entrega 2026</b>
								</span>
							</figcaption>
						</figure>
					</a>
	
					<a href="/voir/amenabar">
						<figure>
							<img
								src="/pics/voir_amenabar.webp"
								width="480"
								height="720"
								alt="portrait-2"
							/>
							<figcaption>
								<span>
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Amenábar</p>
								</span>
								<span>
									<b>Entrega inmediata</b>
								</span>
							</figcaption>
						</figure>
					</a>
	
					<a href="/voir/palpa">
						<figure>
							<img
								src="/pics/voir_palpa.webp"
								width="480"
								height="720"
								alt="portrait-3"
							/>
							<figcaption>
								<span>
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Palpa</p>
								</span>
								<span>
									<b>Entrega inmediata</b>
								</span>
							</figcaption>
						</figure>
					</a>
	
					<a href="/voir/cespedes">
						<figure>
							<img
								src="/pics/voir_cespedes.webp"
								width="480"
								height="720"
								alt="portrait-4"
							/>
							<figcaption>
								<span>
									<img src="/pics/LOGO LIVE.webp" width="45" alt="live" />
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Céspedes</p>
								</span>
								<span>
									<b>Entrega 2027</b>
								</span>
							</figcaption>
						</figure>
					</a>

					<!-- <a href="/voir/suites">
						<figure>
							<img
								src="/pics/voir_suites.webp"
								width="480"
								height="720"
								alt="portrait-1"
							/>
							<figcaption>
								<span>
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Suites</p>
								</span>
								<span>
									<b>Entrega 2026</b>
								</span>
							</figcaption>
						</figure>
					</a>
	
					<a href="/voir/amenabar">
						<figure>
							<img
								src="/pics/voir_amenabar.webp"
								width="480"
								height="720"
								alt="portrait-2"
							/>
							<figcaption>
								<span>
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Amenábar</p>
								</span>
								<span>
									<b>Entrega inmediata</b>
								</span>
							</figcaption>
						</figure>
					</a>
	
					<a href="/voir/palpa">
						<figure>
							<img
								src="/pics/voir_palpa.webp"
								width="480"
								height="720"
								alt="portrait-3"
							/>
							<figcaption>
								<span>
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Palpa</p>
								</span>
								<span>
									<b>Entrega inmediata</b>
								</span>
							</figcaption>
						</figure>
					</a>
	
					<a href="/voir/cespedes">
						<figure>
							<img
								src="/pics/voir_cespedes.webp"
								width="480"
								height="720"
								alt="portrait-4"
							/>
							<figcaption>
								<span>
									<img src="/pics/LOGO LIVE.webp" width="45" alt="live" />
									<img src="/vector/VOIR.logo.svg" alt="VOIR" />
									<p>Céspedes</p>
								</span>
								<span>
									<b>Entrega 2027</b>
								</span>
							</figcaption>
						</figure>
					</a> -->
				</div>
			</div>
	</section>`;
};

export default ProjectsCarousel;
