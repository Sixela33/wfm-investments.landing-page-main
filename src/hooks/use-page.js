import db from "~/src/db/voir-contents";
import { SPEC_ORDER } from "~/src/constants/spec";

const AVAILABLE_PAGES = Object.keys(db).map((k) => `/voir/${k}`);

const usePage = () => {
  const pathname = window.location.pathname;

  if (!AVAILABLE_PAGES.includes(pathname)) {
    window.location.replace("/");
    throw new Error("Page not found");
  }

  const key = pathname.replace("/voir/", "");

  /** @type {Page} */
  const page = db[key];

  const getMapInfo = () => page.map;
  const getVideo = () => page.video;
  const getName = () => key.charAt(0).toUpperCase() + key.slice(1);
  const getSidetext = () => page.sidetext;
  const getCarousel = () => page.carousel;
  const getTags = () => {
    const [period, environments, state, location] = page.tags;

    return {
      period,
      environments,
      state,
      location,
    };
  };
  const getEnvImage = (env, dimension) => page.environment[env][dimension];
  const getEnvs = () => Object.keys(page.environment);
  const getAvailableDimesions = (env) =>
    Object.keys(page.environment[env]).filter(
      (k) =>
        ![
          "surface",
          "environments",
          "bathrooms",
          "rooms",
          "toilets",
          "kitchens",
        ].includes(k)
    );
  const getAvailableSpecs = (env) =>
    Object.keys(page.environment[env])
      .filter((k) =>
        [
          "surface",
          "environments",
          "bathrooms",
          "rooms",
          "toilets",
          "kitchens",
        ].includes(k)
      )
      .sort((a, b) => SPEC_ORDER.indexOf(a) - SPEC_ORDER.indexOf(b));
  const getEnvSpecs = (env) => {
    const { bathrooms, rooms, environments, surface, toilets, kitchens } =
      page.environment[env];

    return {
      bathrooms,
      rooms,
      environments,
      surface,
      toilets,
      kitchens,
    };
  };
  const getEnvDefaults = () => {
    const defaultKey = Object.keys(page.environment)[0];

    const specs = getEnvSpecs(defaultKey);
    const availableDimesions = getAvailableDimesions(defaultKey);
    const availableSpecs = getAvailableSpecs(defaultKey);
    const preview = getEnvImage(defaultKey, availableDimesions[0]);

    return {
      key: defaultKey,
      preview,
      specs,
      availableDimesions,
      availableSpecs,
    };
  };
  const getBrochure = () => page.brochure;

  return {
    getMapInfo,
    getVideo,
    getName,
    getSidetext,
    getCarousel,
    getTags,
    getEnvImage,
    getEnvs,
    getEnvSpecs,
    getEnvDefaults,
    getBrochure,
    getAvailableDimesions,
    getAvailableSpecs,
  };
};

export default usePage;
