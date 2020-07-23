import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


const Souvenir = (props) => {
    console.log(props)
    return(

        <div>
            { props.souvenir ? (

                <Card>
                    <CardMedia style={{height:0, paddingTop: '45.25%'}}
                        // image={props.souvenir.souvenirImage.fields.file.url}
                               title={props.souvenir.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant={"headline"} component={"h2"}>
                            {props.souvenir.title}
                        </Typography>
                        <Typography component={"p"}>
                            ss{/*{props.souvenir.fields.description}*/}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size={"small"} color={"primary"}  target={"_blank"}>
                            get more information!!
                        </Button>
                    </CardActions>
                </Card>
            ): null }
        </div>
    )
}
export default Souvenir