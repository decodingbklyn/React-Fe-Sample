import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

function Article(props){

    return(
            <Card className="article" disableRipple>
                <CardActionArea className="article--img" disabled disableRipple>
                    <CardMedia 
                        image={ props.img  }     
                        title={ props.title }
                        height={ props.imgHeight }
                        component="img"
                        disableRipple
                    />
                    <CardContent className="article--descr" disableRipple>
                        <Typography className="article--date">{ props.date }</Typography>
                        <Typography className="article--title">{ props.title }</Typography>
                        <Typography className="article--author">Presented by { props.author }</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default Article