import React, {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
export default function Launch (props){
    

<div>
          
          
          <h3>{props.details}</h3>
           <h3>{props.launch_date_utc}</h3>
           <h3>{props.launch_site}</h3>
         
         <h3>{props.mission_name}</h3>
         
         props.
         </div>

      return(
      /*
      <Card sx={{ maxWidth: 200}}>
      <CardMedia
        component="img"
        height="100px"
        width ="100px"
        image={props.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {props.mission_name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {props.launch_date_utc}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.launch_site}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.details}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" href = {props.article}>Learn More</Button>
      </CardActions>
    </Card>
      
      
      
      
      
      )
      
*/


         <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          bgcolor: 'background.paper',
          overflow: 'hidden',
          borderRadius: '12px',
          boxShadow: 1,
          fontWeight: 'bold',
          margin :"auto"
        }}
      >
        <Box
          component="img"
          sx={{
            height: 400,
            width: 350,
            maxHeight: { xs: 400, md: 400 },
            maxWidth: { xs: 400, md: 400 },
          }}
          alt="Image can't bbe displayed"
          src={props.image}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
          }}
        >
          <Box component="span" sx={{ fontSize: 30, mt: 1 }}>
          {props.mission_name}
          </Box>
          <Box component="span" sx={{ color: 'primary.main', fontSize: 18}}>
            {props.details}
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
              borderRadius: '5px',
              color: 'primary.main',
              fontWeight: 'medium',
              display: 'flex',
              fontSize: 12,
              alignItems: 'center',
              '& svg': {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
            <AccessTimeIcon />
            {props.launch_date_utc}
          </Box>
          <Box
            sx={{
              mt: 1.5,
              p: 0.5,
              backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
              borderRadius: '5px',
              color: 'primary.main',
              fontWeight: 'medium',
              display: 'flex',
              fontSize: 12,
              alignItems: 'center',
              '& svg': {
                fontSize: 21,
                mr: 0.5,
              },
            }}
          >
            <PlaceIcon />
            {props.launch_site}          </Box>
        </Box>
      </Box>);
    }


