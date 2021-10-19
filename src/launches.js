import React, { Component,useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import Launch from './launch';
import Box from '@mui/material/Box';
import algoliasearch from 'algoliasearch/lite';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './search';

import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';



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


const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.mission_name.toLowerCase() || post.site_name_long.toLowerCase();
      return postName.includes(query);
  });
};



const Launches = (props) => {

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const { loading, error, data } = useQuery(GET_BIZ);
  if (loading) return null;
  if (error) return `Error! ${error}`;
  const results = data.launches.filter(launch=>launch.details != null)
  const filteredPosts = filterPosts(results, searchQuery);

  return (<React.Fragment>
  
  <Search
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

  <Box width = "800px" m = "auto">{filteredPosts.map(launch=>(
  <Launch details = {launch.details} 
  launch_date_utc = {launch.launch_date_utc}
  launch_site = {launch.launch_site.site_name_long}
  mission_name = {launch.mission_name}
  image = {launch.links.mission_patch_small}
  article = {launch.links.article_link}

  >
  </Launch>))}</Box>




  </React.Fragment>
  )

};
 
export default Launches;





