import $ from "~/src/utils/query";
import usePage from "~/src/hooks/use-page";
import onceMounted from "~/src/hooks/once-mounted";
import { SPEC_LABELS } from "~/src/constants/spec";
import "~/src/stylesheets/ui/environments.css";

const Environments = () => {
  const {
    getEnvImage,
    getEnvs,
    getEnvSpecs,
    getEnvDefaults,
    getAvailableDimesions,
    getAvailableSpecs,
  } = usePage();
  

  const {
    key: defaultKey,
    preview: defaultPreview,
    specs: defaultSpecs,
    availableDimesions: defaultAvailableDimesions,
    availableSpecs: defaultAvailableSpecs,
  } = getEnvDefaults();
  const envs = getEnvs();

  let key = defaultKey;
  let dimension = defaultAvailableDimesions[0];

  onceMounted(() => {
    const selectedEnv = $("#selected-env"),
      envBadgets = document.querySelectorAll("#envs span");

    const applyBadgetListener = () => {
      const dimBadgets = document.querySelectorAll("#dimensions span");

      const listener = (badget, i) => (ev) => {
        ev.preventDefault();

        dimension = badget.id;

        changeSelected(dimBadgets, i);
        changePreview(key, dimension);
      };

      dimBadgets.forEach((badget, i) => {
        badget.addEventListener("click", listener(badget, i));
      });
    };

    /** @type {(els: HTMLElement[], tgt: number) => void} */
    const changeSelected = (els, tgt) => {
      els.forEach((el) => el.setAttribute("aria-selected", false));
      els[tgt].setAttribute("aria-selected", true);
    };

    const changeAvailableDimesions = (key) => {
      const dimensions = getAvailableDimesions(key);
      const el = $("#dimensions");

      el.innerHTML = dimensions
        .map(
          (d, i) =>
            /*html*/ `<span aria-selected="${i === 0}" id="${d}">${d}</span>`
        )
        .join("");

      applyBadgetListener();

      return dimensions[0];
    };

    /** @type {(key: string) => void} */
    const changeSpecs = (key) => {
      const specs = getEnvSpecs(key);
      const availableSpecs = getAvailableSpecs(key);

      const el = $("#specs");

      el.innerHTML = availableSpecs
        .map((s) => {
          const label = SPEC_LABELS[s];

          return /*html*/ `<li>
          <p>${label}</p>
          <b id="spec-${s}">${specs[s]}</b>
        </li>`;
        })
        .join("");

      const surface = $(`#spec-surface`),
        environments = $(`#spec-environments`),
        bathrooms = $(`#spec-bathrooms`),
        rooms = $(`#spec-rooms`),
        toilets = $(`#spec-toilets`);

      if (specs.surface) surface.textContent = specs.surface;
      if (specs.environments) environments.textContent = specs.environments;
      if (specs.bathrooms) bathrooms.textContent = specs.bathrooms;
      if (specs.rooms) rooms.textContent = specs.rooms;
      if (specs.toilets) toilets.textContent = specs.toilets;
    };

    const changePreview = (key = key, dimension = dimension) => {
      const img = $("#unit-preview");
      const src = getEnvImage(key, dimension);
      img.setAttribute("src", src);
    };

    applyBadgetListener();

    envBadgets.forEach((badget, i) => {
      badget.onclick = (ev) => {
        ev.preventDefault();

        key = badget.textContent;

        selectedEnv.textContent = badget.textContent;
        changeSelected(envBadgets, i);
        changeSpecs(key);
        const newDimension = changeAvailableDimesions(key);
        changePreview(key, newDimension);
      };
    });
  });

  return /*html*/ `
	<section class="voir__environments">
		<div class="voir__environments__info">
			<h4>Unidades disponibles</h4>
			<i id="selected-env">${defaultKey}</i>

			<ul id="specs">
        <li>
					<p>Precio</p>
					<b>Consultar</b>
				</li>
        ${defaultAvailableSpecs
          .map((s) => {
            return /*html*/ `<li>
              <p>${SPEC_LABELS[s]}</p>
              <b id="spec-${s}">${defaultSpecs[s]}</b>
            </li>`;
          })
          .join("")}
			</ul>

			<div class="voir__environments__envs" id="envs">
				${envs
          .map((env, i) => {
            const id = env.split(" ").join("");

            return /*html*/ `<span aria-selected="${
              i === 0
            }" id="${id}">${env}</span>`;
          })
          .join("")}
			</div>
		</div>

		<div class="voir__environments__preview">
      <div class="voir__environments__dimensions" id="dimensions">
      ${defaultAvailableDimesions
        .map(
          (d, i) =>
            /*html*/ `<span aria-selected="${i === 0}" id="${d}">${d}</span>`
        )
        .join("")}
      </div>
      <img id="unit-preview" src="${defaultPreview}" alt="3D or 2D plan" />
		</div>
	</section>`;
};

export default Environments;
