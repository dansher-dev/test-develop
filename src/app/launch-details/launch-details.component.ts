import {Component, ChangeDetectionStrategy, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {map, switchMap, take} from "rxjs/operators";
import {Launch, LaunchDetailsGQL} from "../services/spacexGraphql.service";
import {select, Store} from "@ngrx/store";
import {IState, LaunchListState} from "../store/reducers/launch-list.reducer";
import {getLaunchDetail} from "../store/selectors";
import {pushData, setID} from "../store/actions";
import {Observable, of} from "rxjs";

@Component({
  selector: "app-launch-details",
  templateUrl: "./launch-details.component.html",
  styleUrls: ["./launch-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchDetailsComponent implements OnInit {
  launchDetails$: Observable<Launch>;
  imageIndex = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly launchDetailsService: LaunchDetailsGQL,
    private store: Store<IState>
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id: string = params.get("id");
      this.store.dispatch(setID({selectedId: id}));
      this.store.select(getLaunchDetail)
        .pipe(take(1))
        .subscribe((detail: Launch) => {
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

  public onImageSwitch(operator: string, length: number): void {
    if (operator === '-' && this.imageIndex > 0) {
      this.imageIndex--;
    } else if (operator === '+' && this.imageIndex < length - 1) {
      this.imageIndex++;
    }
  }
}
