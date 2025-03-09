import { BODY_SCHEMA } from "~/src/constants/body-schema";
import "~/src/stylesheets/ui/image-sidetext.css";

const ImageSidetext = ({ url, title, body, brochure, side = 'left' }) => {
	const storedData = JSON.parse(
    localStorage.getItem("wfm:body_form") ?? JSON.stringify({ ...BODY_SCHEMA })
  );
  const isReady = storedData.email.length > 0;

  return /*html*/ `
		<article class="image__sidetext">
			<img src="${url}" data-side="${side}" alt="image-${title}" />
			<div>
				<h4>${title}</h4>
				<p>${body}</p>
				${brochure ? /*html*/ `
				<div class="form__wrapper__download">
				<button type="button" class="download_brochure_button redirect_brochure">
					Brochure
					<img src="/vector/download.svg" alt="download" width="22" height="22" />
				</button>
				</div>
			` : ""}
			</div>
		</article>
	`;
};

export default ImageSidetext;
