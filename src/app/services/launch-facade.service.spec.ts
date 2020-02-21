import { TestBed } from '@angular/core/testing';

import { LaunchFacadeService } from './launch-facade.service';
import { provideMockStore } from '@ngrx/store/testing';
import {Apollo} from "apollo-angular";
import {ApolloTestingModule} from "apollo-angular/testing";

describe('LaunchFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ApolloTestingModule],
    providers: [
      provideMockStore({ }),
      Apollo
    ]
  }));

  it('should be created', () => {
    const service: LaunchFacadeService = TestBed.get(LaunchFacadeService);
    expect(service).toBeTruthy();
  });
});
