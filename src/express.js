const listRoutes = require("express-list-routes");

function getRoutes(router) {
  const routes = listRoutes(router);

  for (const route of routes) {
    const path = route.path;
    const pathSegments = path.split("/");

    // Validation values
    const isNotPlural = !pathSegments[1].endsWith("s");
    const isEmpty = pathSegments[1] === "";

    if (isEmpty) {
      console.info(
        `Invalid path: ${path}. The first path segment cannot be empty.`
      );
    } else if (isNotPlural) {
      console.info(
        `Invalid path: ${path}. The first path segment should be plural.`
      );
    } else {
      console.info(`Valid path: ${path}`);
    }
  }
}

module.exports = { getRoutes };
