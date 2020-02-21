import { ActionReducerMap } from "@ngrx/store";
import * as fromLaunchList from "./launch-list.reducer";
import {IState} from "./launch-list.reducer";

export interface LaunchListState {
  launchList: IState;
}

export const launchReducers: ActionReducerMap<LaunchListState, any> = {
  launchList: fromLaunchList.reducer
};
