import {IState, LaunchListState} from "../store/reducers/launch-list.reducer";
import { map } from "rxjs/operators";
import {Launch, PastLaunchesListGQL} from "./spacexGraphql.service";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadLaunchList } from "../store/actions";
import * as launchListQuery from "../store/selectors";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LaunchFacadeService {
  launchListState$ = this.store.select(launchListQuery.getLaunchList);
  launchList$ = this.store.select(launchListQuery.getLaunchList);
  launchListLoaded$ = this.store.select(launchListQuery.getLaunchListLoaded);
  launchListLoading$ = this.store.select(launchListQuery.getLaunchListLoading);

  constructor(
    private readonly store: Store<IState>,
    private readonly pastLaunchesService: PastLaunchesListGQL
  ) {}

  public pastLaunchListStoreCache(): Observable<Launch[]> {
    this.store.dispatch(loadLaunchList());
    return this.launchList$;
  }

  public pastLaunchListFacade() {
    return this.pastLaunchesService
      .fetch({ limit: 30 })
      .pipe(map(res => res.data.launchesPast));
  }
}
