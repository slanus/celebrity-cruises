import { TripInfoService } from "../../services/trip-info.service";

export class FindReservationController {
  tripInfo: TripInfo;

  constructor(
    private tripInfoService: TripInfoService,
    private $scope: ITripInfoControllerScope
  ) {
    $scope.tripInfo = tripInfoService.getTripInfo();
  }
}
