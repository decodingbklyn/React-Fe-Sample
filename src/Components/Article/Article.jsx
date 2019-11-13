import React from 'react'
import PropTypes from 'prop-types';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

function Article(props){
    return(
        <Card className="article" disableripple="true">
            <CardActionArea className="article--img" disabled>
                <CardMedia 
                        image={ props.img  }     
                        title={ props.title }
                        height={ props.imgHeight }
                        component="img"
                    />
            </CardActionArea>
            <CardActionArea  focusVisibleClassName="disabled" >
                <CardContent className="article--descr">
                    <Typography className="article--date">{ props.date }</Typography>
                    <Typography className="article--title">{ props.title }</Typography>
                    <Typography className="article--author">Presented by <span>{ props.author }</span></Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

Article.propTypes = {
    img: PropTypes.string, 
    title: PropTypes.string, 
    imgHeight: PropTypes.string,
    date: PropTypes.string, 
    author: PropTypes.string
}

export default Article