import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import mainMom2 from './images/mainMom2.png';
import momBack from './images/momBack.png';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
   },
   paper: {
     padding: theme.spacing(1),
     textAlign: 'center',
     color: theme.palette.text.secondary,
     backgroundColor: green,
   },
 }));
//   const classes = useStyles();


export default function PicOne() {
   return (
<div>
{/* <img src={mainMom2} fluid height={500} maxwidth={400} /> */}
<img fluid src={momBack} height={500} maxwidth={400} />

</div>
   );
   }

