import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

function Article(props){

    return(
            <Card className="article">
                <CardActionArea className="article--img">
                    <CardMedia 
                        image={ require(props.img)  }
                        title={ props.title }
                        height={ props.imgHeight }
                        component="img"
                    />
                    {console.log(Number.parseInt(props.articleId))}
                    <CardContent className="article--descr">
                        <Typography>{ props.date }</Typography>
                        <Typography>{ props.title }</Typography>
                        <Typography>{ props.author }</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default Article