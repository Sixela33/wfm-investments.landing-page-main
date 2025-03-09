import $ from "~/src/utils/query";
import onceMounted from "~/src/hooks/once-mounted";
import usePage from "~/src/hooks/use-page";
import "~/src/stylesheets/ui/carousel.css";

const Carousel = () => {
  const { getCarousel } = usePage();

  const carousel = getCarousel();

  let selected = 0;

  onceMounted(() => {
    const prev = $("#prev"),
      next = $("#next"),
      carousel = $("#carousel"),
      preview = $("#preview");

    const children = carousel.children;

    Array.from(carousel.children).forEach((child, i) => {
      child.onclick = () => {
        selected = i;

        carousel.scrollTo({
          left: selected * carousel.children[0].width,
          behavior: "smooth",
        });
  
        Array.from(carousel.children).forEach((child, i) => {
          child.setAttribute("aria-selected", i === selected);
        });
        preview.setAttribute("src", children[selected].src);
      }
    });

    prev.onclick = () => {
      selected = selected > 0 ? selected - 1 : carousel.children.length - 1;

      carousel.scrollTo({
        left: selected * carousel.children[0].width,
        behavior: "smooth",
      });

			Array.from(carousel.children).forEach((child, i) => {
				child.setAttribute("aria-selected", i === selected);
			});
      preview.setAttribute("src", children[selected].src);
    };

    next.onclick = () => {
      selected = selected < carousel.children.length - 1 ? selected + 1 : 0;

      carousel.scrollTo({
        left: selected * carousel.children[0].width,
        behavior: "smooth",
      });

			Array.from(carousel.children).forEach((child, i) => {
				child.setAttribute("aria-selected", i === selected);
			});
			preview.setAttribute("src", children[selected].src);
    };
  });

  return /*html*/ `
	<section class="voir__carousel">
		<img src="${carousel[0]}" alt="image-0" id="preview" />

		<div class="voir__carousel__actions">
			<button id="prev" type="button">
				<img src="/vector/chevron-left-white.svg" height="24" width="24" />
			</button>
			<button id="next" type="button">
				<img src="/vector/chevron-right-white.svg" height="24" width="24" />
			</button>
		</div>

		<div class="voir__carousel__rest__images" id="carousel">
			${carousel
        .map(
          (url, i) =>
            `<img src="${url}" data-key="${i}" alt="image-${i}" aria-selected="${
              selected === i
            }" />`
        )
        .join("")}
		</div>
	</section>`;
};

export default Carousel;
