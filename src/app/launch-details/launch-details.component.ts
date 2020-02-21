import {Component, ChangeDetectionStrategy, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {map, switchMap, take} from "rxjs/operators";
import { LaunchDetailsGQL } from "../services/spacexGraphql.service";
import {select, Store} from "@ngrx/store";
import {LaunchListState} from "../store/reducers/launch-list.reducer";
import {getLaunchDetail} from "../store/selectors";
import {pushData, setID} from "../store/actions";
import {Observable, of} from "rxjs";
import {ILaunchDetails} from "../data.models";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {
  launchDetails$: Observable<any>;
  imageIndex = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL,
    private store: Store<LaunchListState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: string = params.get("id");
      this.store.dispatch(setID({selectedId: id}));
      this.launchDetails$ = this.store.select(getLaunchDetail)
      this.store.select(getLaunchDetail)
        .pipe(take(1))
        .subscribe((detail) => {
        if (detail) {
          this.launchDetails$ = of(detail);
        } else {
          this.launchDetails$ = this.launchDetailsService.fetch({id})
            .pipe(map(res => {
              this.store.dispatch(pushData({launchDetails: res.data.launch}));
              return res.data.launch;
            }));
        }
      });
    });
  }

  onIndexUpdate(operator: string, length: number) {
    if (operator === '-' && this.imageIndex > 0) {
      this.imageIndex--;
    } else if (operator === '+' && this.imageIndex < length - 1) {
      this.imageIndex++;
    }
  }
}
