import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

function Article(props){
    return(
        <div>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        image={props.img}
                        title={props.title}
                    />
                    <CardContent>
                        <Typography>{props.date}</Typography>
                        <Typography>{props.title}</Typography>
                        <Typography>{props.author}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Article