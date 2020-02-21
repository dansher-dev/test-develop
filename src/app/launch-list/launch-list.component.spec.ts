import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchListComponent } from './launch-list.component';
import {MatCardModule, MatProgressSpinnerModule} from "@angular/material";
import {RouterTestingModule} from "@angular/router/testing";
import {RelativeTimePipe} from "../core/helpers/pipes/relative-time/relative-time.pipe";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Apollo} from "apollo-angular";
import * as fromLaunch from "../store/reducers/launch-list.reducer";
import {Store} from "@ngrx/store";
import {LaunchListState} from "../store/reducers";
import {LaunchFacadeService} from "../services/launch-facade.service";

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;
  let store: MockStore<fromLaunch.IState>;
  const initialState = { launchList: {
      data: [],
      launchDetails: [],
      selectedId: '',
      loaded: false,
      loading: false,
      error: null
    }
  };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LaunchListComponent,
        RelativeTimePipe
      ],
      imports: [
        MatCardModule,
        MatProgressSpinnerModule,
        RouterTestingModule
      ],
      providers: [
        LaunchFacadeService,
        provideMockStore<LaunchListState>({ initialState}),
        Apollo
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
