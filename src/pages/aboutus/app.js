import Header from "~/src/components/ui/header";
import AboutLandingPage from "~/src/components/ui/about-landing-page";
import AboutGrid from "~/src/components/ui/about-grid";
import Footer from "~/src/components/ui/footer";
import "~/src/stylesheets/forms.css";
import "~/src/stylesheets/sen.font.css";

document.getElementById("root").innerHTML = /*html*/ `
	${Header()}
	${AboutLandingPage()}
	${AboutGrid()}
	${Footer()}
`;
