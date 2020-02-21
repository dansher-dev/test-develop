export interface ILaunchPast {
  id: string;
  mission_name: string;
  links: {
    flickr_images: string[];
    mission_patch_small: string;
    __typename: string;
  };
  rocket: {
    rocket_name: string;
    __typename: string;
  };
  launch_date_utc: string;
  __typename: string;
}

export interface ILaunchDetails {
  id?: string;
  mission_name: string;
  details: string;
  links: {
    flickr_images: string[];
    mission_patch: string;
    __typename: string;
  };
  __typename: string;
}
