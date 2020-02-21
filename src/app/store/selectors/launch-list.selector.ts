import { LaunchListState } from "../reducers";
import {createFeatureSelector, createSelector, MemoizedSelector, Selector, SelectorWithProps} from "@ngrx/store";
import {Launch} from "../../services/spacexGraphql.service";
import {IState} from "../reducers/launch-list.reducer";

export const getLaunchListState: MemoizedSelector<IState, LaunchListState> = createFeatureSelector<LaunchListState>("launchList");

export const getLaunchList = createSelector(
  getLaunchListState as Selector<IState, any>,
  (state: IState) => state.data
);

export const getLaunchListLoaded = createSelector(
  getLaunchListState as Selector<IState, any>,
  (state: any) => state.loaded
);

export const getLaunchListLoading = createSelector(
  getLaunchListState as Selector<IState, any>,
  (state: any) => state.loading
);

export const getLaunchId = createSelector(
  getLaunchListState as Selector<IState, any>,
  (state: any) => state.selectedId
);

export const getLaunchDetails = createSelector(
  getLaunchListState as Selector<IState, any>,
  (state: any) => state.launchDetails
);

export const getLaunchDetail = createSelector(
  getLaunchId, getLaunchDetails,
  (id: string, data: Launch[]) => data.find((el) => {
    return el.id === id;
  })
);
