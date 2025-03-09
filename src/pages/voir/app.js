import Footer from "~/src/components/ui/footer";
import VoirLandingPage from "~/src/components/ui/voir-landing-page";
import ImageSidetext from "~/src/components/ui/image-sidetext";
import Carousel from "~/src/components/ui/carousel";
import Location from "~/src/components/ui/location";
import Environments from "~/src/components/ui/environments";
import usePage from "~/src/hooks/use-page";
import "~/src/stylesheets/forms.css";
import "~/src/stylesheets/sen.font.css";

const { getSidetext, getBrochure } = usePage();

const brochurePath = getBrochure();
const sidetext = getSidetext();

document.getElementById("root").innerHTML = /*html*/ `
	${VoirLandingPage()}
  ${sidetext
    .map(({ body, title, url }, i) => {
      const side = i % 2 == 0 ? "left" : "right"
      const brochure = i === sidetext.length - 1 ? brochurePath : "";

      return ImageSidetext({
        title,
        body,
        url,
        side,
        brochure
      });
    })
    .join("")}
  ${Carousel()}
  ${Location()}
  ${Environments()}
	${Footer()}
`;
