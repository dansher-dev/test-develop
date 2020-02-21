import { LaunchFacadeService } from "../services/launch-facade.service";
import {Component, ChangeDetectionStrategy, OnInit} from "@angular/core";

@Component({
  selector: "app-launch-list",
  templateUrl: "./launch-list.component.html",
  styleUrls: ["./launch-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {
  constructor(private readonly launchFacade: LaunchFacadeService) {}
  pastLaunches$ = this.launchFacade.pastLaunchListStoreCache();
  isLoading$ = this.launchFacade.launchListLoading$;
  placeholderArray = [1, 2, 3, 4, 5, 6];

  ngOnInit(): void {}
}
