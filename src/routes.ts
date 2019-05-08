var config: AppConfig.Configuration = require("./app.config.json!");
import "angular";

export function registerRoutesFor(app: angular.IModule) {
  "use strict";

  app.config(
    (
      $routeProvider: angular.route.IRouteProvider,
      $locationProvider: angular.ILocationProvider
    ) => {
      $locationProvider.html5Mode(config.client.html5Mode);

      let editRservation = config.client.routes.find(
        v => v.controller === "editReservationController"
      );
      let findReservation = config.client.routes.find(
        v => v.controller === "findReservationController"
      );

      $routeProvider
        .when(editRservation.path, {
          templateUrl: editRservation.templateUrl,
          controller: editRservation.controller
        })
        .when(findReservation.path, {
          templateUrl: findReservation.templateUrl,
          controller: findReservation.controller
        })
        .otherwise({
          redirectTo: config.client.basePath
        });
    }
  );
}
