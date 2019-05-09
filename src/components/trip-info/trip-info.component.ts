import { TripInfoService } from "../../services/trip-info.service";
import { DateService } from "../../services/date.service";

export const TripInfoComponent = {
  bindings: {
    readOnly: "<",
    tripInfo: "="
  },
  templateUrl: "src/components/trip-info/trip-info.component.html",
  controller: class TripInfoController {
    ships: Ship[] = [];
    months: Month[] = [];
    days: number[] = [];
    years: number[] = [];

    tripService: TripInfoService;
    sailDateService: DateService;

    /* @ngInject */
    constructor(
      private tripInfoService: TripInfoService,
      private dateService: DateService,
      private $location: ng.ILocationService
    ) {
      this.tripService = tripInfoService;
      this.sailDateService = dateService;
    }

    $onInit(): void {
      this.ships = this.tripService.listShips();
      this.months = this.sailDateService.listMonths();
      this.days = this.sailDateService.listDays();
      this.years = this.sailDateService.listYears();

      // Clean data
      if (
        !this.readOnly &&
        this.tripInfo !== undefined &&
        !this.tripInfo.rememberInfo
      ) {
        this.tripInfo = {
          reservationNumber: "",
          lastNameOnReservation: "",
          rememberInfo: false,
          ship: "",
          month: "",
          day: "",
          year: ""
        };
      }
    }

    findReservation(): void {
      this.tripService.save(this.tripInfo);
      this.$location.path(`/reservation/1`);
    }

    editReservation(): void {
      this.$location.path(`/`);
    }
  }
};
