import { LaunchListState } from "../reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import {ILaunchDetails} from "../../data.models";

export const getLaunchListState = createFeatureSelector<LaunchListState>(
  "launchList"
);

export const getLaunchList = createSelector(
  getLaunchListState,
  (state: any) => {
    return state.data;
  }
);

export const getLaunchListLoaded = createSelector(
  getLaunchListState,
  (state: any) => state.loaded
);

export const getLaunchListLoading = createSelector(
  getLaunchListState,
  (state: any) => state.loading
);

export const getLaunchId = createSelector(
  getLaunchListState,
  (state: any) => state.selectedId
);

export const getLaunchDetails = createSelector(
  getLaunchListState,
  (state: any) => state.launchDetails
);

export const getLaunchDetail = createSelector(
  getLaunchId, getLaunchDetails,
  (id: string, data: ILaunchDetails[]) => data.find((el) => {
    return el.id === id;
  })
);
