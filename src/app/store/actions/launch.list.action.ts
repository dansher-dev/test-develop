import { createAction, props } from "@ngrx/store";
import {Launch} from "../../services/spacexGraphql.service";

export const loadLaunchList = createAction("[Launch] Load Launch List");

export const loadLaunchListSuccess = createAction(
  "[Launch] Load Launch List Success",
  props<{ payload: Launch[] }>()
);

export const loadLaunchListFail = createAction(
  "[Launch] Load Launch List Fail",
  props<{ payload: any }>()
);

export const setID = createAction(
  "Set selected ID",
  props<{selectedId: string}>()
);

export const pushData = createAction(
  "Push details data",
  props<{launchDetails: Launch}>()
);

export type LaunchListAction =
  | typeof loadLaunchList
  | typeof loadLaunchListSuccess
  | typeof loadLaunchListFail
  | typeof setID
  | typeof pushData;
