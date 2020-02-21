import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchDetailsComponent } from './launch-details.component';
import {MatCardModule, MatToolbarModule} from "@angular/material";
import {RouterTestingModule} from "@angular/router/testing";
import {MockStore, provideMockStore} from "@ngrx/store/testing";
import {Apollo} from "apollo-angular";
import {Store} from "@ngrx/store";
import {IState} from "../store/reducers/launch-list.reducer";
import {LaunchListState} from "../store/reducers";
import {ApolloTestingModule} from "apollo-angular/testing";

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;
  let store: MockStore<IState>;
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
      declarations: [ LaunchDetailsComponent ],
      imports: [
        MatCardModule,
        RouterTestingModule,
        ApolloTestingModule,
        MatToolbarModule
      ],
      providers: [
        provideMockStore<LaunchListState>({ initialState}),
        Apollo
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
