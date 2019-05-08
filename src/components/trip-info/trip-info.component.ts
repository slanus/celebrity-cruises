import { TripInfoService } from "../../services/trip-info.service";

export const TripInfoComponent = {
  bindings: {
    readOnly: "<"
  },
  templateUrl: "src/components/trip-info/trip-info.component.html",
  controller: class TripInfoController {
    /* @ngInject */
    constructor(private tripInfoService: TripInfoService) {}

    $onChanges(changes) {
      console.info("On Changes...");
    }
  }
};
