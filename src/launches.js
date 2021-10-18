import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';
import Launch from './launch';
import Box from '@mui/material/Box';

const GET_BIZ = gql`
query que{
  launches {
    details
    launch_date_utc
    launch_site {
      site_id
      site_name_long
      site_name
    }
    mission_name
    rocket {
      rocket_name
      rocket_type
    }
    launch_success
    links {
      article_link
      mission_patch_small
      mission_patch
      presskit
      reddit_campaign
      reddit_launch
      reddit_media
      reddit_recovery
      video_link
      wikipedia
    }
  }
}
`;

const Launches = (props) => {
  const { loading, error, data } = useQuery(GET_BIZ);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  const results = data.launches.filter(launch=>launch.details != null)
  return (<Box m = "auto">{results.map(launch=>(
  <Launch details = {launch.details} 
  launch_date_utc = {launch.launch_date_utc}
  launch_site = {launch.launch_site.site_name_long}
  mission_name = {launch.mission_name}
  image = {launch.links.mission_patch_small}
  article = {launch.links.article_link}

  >
  </Launch>))}</Box>)
  //<ul>{data.launchesPast.map(launch=><li>{launch.mission_name}</li>)}</ul>;
};
 
export default Launches;





