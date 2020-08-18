import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import "./Info.css"

function Info({ title, cases, isRed, active, total, ...props }) {
    return (
        <Card
            onClick={props.onClick} className={`info 
            ${active && "info--green"} 
            ${isRed && "info--red"}`}>
            <CardContent>
                <Typography className="info_title" color="textSecondary">
                    {title}
                </Typography>
                <h2 className={`info_cases 
                    ${!isRed && "info_cases--green"}`}>
                    {cases}</h2>
                <Typography className="info_total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Info