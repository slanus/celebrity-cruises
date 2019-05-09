import * as angular from "angular";
import "ngSanitize";
import "ngRoute";
import "ngStorage";
import "ngAnimate";
import "ngTouch";
import "angular-ui-bootstrap";
import { EditReservationController } from "./controllers/edit-reservation/edit-reservation.controller";
import { FindReservationController } from "./controllers/find-reservation/find-reservation.controller";
import { registerRoutesFor } from "./routes";
import { TripInfoComponent } from "./components/trip-info/trip-info.component";
import { TripInfoService } from "./services/trip-info.service";
import { DateService } from "./services/date.service";

export module app {
  "use strict";
  var app = angular
    .module("app", [
      "ngSanitize",
      "ngRoute",
      "ngStorage",
      "ngAnimate",
      "ngTouch",
      "ui.bootstrap"
    ])
    .controller("editReservationController", EditReservationController)
    .controller("findReservationController", FindReservationController)
    .component("tripInfo", TripInfoComponent)
    .service("tripInfoService", TripInfoService)
    .service("dateService", DateService);

  registerRoutesFor(app);

  export var angularModule = app;
}
