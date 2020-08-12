import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import './InfoBox.css';
function InfoBox({title,cases,active,total,...props}) {
    return (
        <Card className={`infoBox ${active && "infoBox--selected"}`}
        onClick={props.onClick}>
            <CardContent>
                {/*Title */}
            <Typography className='infoBox__title' color='textSecondary'>
                {title}
            </Typography>

                {/*Number of cases */}
            <h2 className={`infoBox__cases ${"infoBox__cases--green"}`}>{cases}</h2>

                {/*Total */}
            <Typography className='infoBox__total' color='textSecondary'>
            {total} Total
            </Typography >
            
            </CardContent>
        </Card>
    )
}

export default InfoBox
