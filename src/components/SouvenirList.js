import React, {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import * as contentful from 'contentful'
import TextFiled from '@material-ui/core/TextField'
import Souvenir from '../components/Souvenir'

class SouvenirList extends Component {
    state = {
        souvenirs: [{"id":'1', "title": "title1", "description":"1", "url":"ddd"},{"id":'2', "title": "title2", "description":"2", "url":"ddd"},{"id":'3', "title": "title3", "description":"3", "url":"ddd"}],
        searchString: ''
    }


    onSearchInputChange = (event) => {
        if (event.target.value) {
            this.setState({searchString: event.target.value})
        } else {
            this.setState({searchString: ''})
        }
        // this.getSouvenirs()
    }

    render() {
        return (
            <div>
                {this.state.souvenirs ? (
                    <div>
                        <TextFiled style={{padding: 24}}
                                   id={"searchInput"}
                                   placeholder={"Search for Souvenir"}
                                   margin={"normal"}
                                   onChange={this.onSearchInputChange}/>
                        <Grid container spacing={24} style={{padding: 24}}>
                            {this.state.souvenirs.map((currentSouvenir, key) => (
                                <Grid item xs={12} sm={6} lg={4} xl={3} key={key}>
                                    <Souvenir souvenir={currentSouvenir} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No souvenirs found"}
            </div>
        )
    }
}
export default SouvenirList