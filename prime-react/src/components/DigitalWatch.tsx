import React, {useEffect, useState} from 'react';
import {Grid , Card , CardContent,CardHeader, makeStyles, Typography, Button} from "@material-ui/core";

let useStyles = makeStyles({
    grid : {
        margin : '0.5rem'
    },
    card : {
        margin : '0.5rem',
        boxShadow : '0 0 3px black',
        backgroundColor : '#e4f8e4'
    },
    cardHeader : {
        backgroundColor : 'teal',
        color : 'white'
    },
    button : {
        margin : '0.5rem'
    }
});

interface IProps {}
interface IState {
    currentTime : string;
}

let DigitalWatch:React.FC<IProps> = ({}) => {
    let [state , setState] = useState<IState>({
        currentTime : new Date().toLocaleTimeString()
    });

    useEffect(() => {
        let interval = setInterval(() => {
            setState({
                currentTime : new Date().toLocaleTimeString()
            })
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    let classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={4}>
                    <Card className={classes.card}>
                        <CardHeader title="Digital Watch" className={classes.cardHeader}/>
                        <CardContent>
                            <Typography variant="h2">{state.currentTime}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};
export default DigitalWatch;