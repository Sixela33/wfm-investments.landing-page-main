import Header from "~/src/components/ui/header";
import LandingPage from "~/src/components/ui/landing-page";
import OportunitiesGrid from "~/src/components/ui/oportunities-grid";
import ProjectsCarousel from "~/src/components/ui/projects-carousel";
import Footer from "~/src/components/ui/footer";
import "~/src/stylesheets/forms.css";
import "~/src/stylesheets/sen.font.css";

document.getElementById("root").innerHTML = /*html*/ `
	${Header()}
	${LandingPage()}
	${ProjectsCarousel()}
	${OportunitiesGrid()}
	${Footer()}
`;
