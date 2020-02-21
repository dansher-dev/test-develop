import {createReducer, on} from "@ngrx/store";
import {
  LaunchListAction,
  loadLaunchList,
  loadLaunchListFail,
  loadLaunchListSuccess,
  setID,
  pushData,
} from "../actions";
import {ILaunchDetails, ILaunchPast} from "../../data.models";

export interface IState {
  data: ILaunchPast[];
  launchDetails: ILaunchDetails[];
  selectedId: string;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export type LaunchListState = IState;

const initialState: LaunchListState = {
  data: [],
  launchDetails: [],
  selectedId: null,
  loaded: false,
  loading: false,
  error: null
};

const launchListReducer = createReducer(
  initialState,
  on(loadLaunchList, state => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(loadLaunchListSuccess, (state, {payload}) => {
    return {
      ...state,
      data: payload,
      loading: false,
      loaded: true
    };
  }),
  on(loadLaunchListFail, (state, {payload}) => ({
    ...state,
    error: payload
  })),
  on(setID, (state, {selectedId}) => ({
      ...state,
      selectedId
  })),
  on(pushData, (state, {launchDetails}) => ({
      ...state,
      launchDetails: [...state.launchDetails, launchDetails]
  }))
);

export function reducer(
  state: LaunchListState | undefined,
  action: LaunchListAction
) {
  return launchListReducer(state, action);
}
