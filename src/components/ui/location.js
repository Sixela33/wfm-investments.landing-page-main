import onceMounted from "~/src/hooks/once-mounted";
import usePage from "~/src/hooks/use-page";
import "~/src/stylesheets/ui/location.css";

const Location = () => {
  const { getMapInfo, getName } = usePage();

  const name = getName();
  const { title, body, location, coords } = getMapInfo();
  const [lat, lng] = coords;

  document.title = `WFM Investments | VOIR ${name}`;

  onceMounted(() => {
    const info = document.getElementById("location-info"),
      map = document.getElementById("location-map");

    map.style.height = `${info.clientHeight}px`;
  });

  // Create the Google Maps embed URL using the coordinates with a marker pin
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0LCsDM0JzE3LjAiUyA1OMKwMjYnNTMuNCJX!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus`;
  
  // Add marker parameter separately for clarity
  const mapEmbedUrlWithMarker = `${mapEmbedUrl}&markers=color:red|${lat},${lng}`;

  return /*html*/ `
	<section class="voir__location">
		<div class="voir__location__map" id="location-map">
			<iframe 
                src="${mapEmbedUrlWithMarker}" 
                width="100%" 
                height="100%" 
                style="border: 0; filter: grayscale(100%);" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
		</div>

		<div class="voir__location__info" id="location-info">
			<h4>${title}</h4>
			<i>${location}</i>
			<p>${body}</p>
		</div>
	</section>`;
};

export default Location;
