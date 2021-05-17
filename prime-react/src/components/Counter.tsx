import React, {useState} from 'react';
import {Grid , Card , CardContent, makeStyles, Typography, Button} from "@material-ui/core";

let useStyles = makeStyles({
    grid : {
        margin : '0.5rem'
    },
    card : {
        margin : '0.5rem',
        boxShadow : '0 0 3px black',
        backgroundColor : '#e4f8e4'
    },
    button : {
        margin : '0.5rem'
    }
});

interface IProps {}
interface IState {
    count : number;
}

let Counter:React.FC<IProps> = ({}) => {
    let [state , setState] = useState<IState>({
        count : 0
    });

    let incrCount = () => {
        setState({
            count : state.count + 1
        });
    };

    let decrCount = () => {
        setState({
            count : (state.count - 1 > 0) ? state.count - 1 : 0
        });
    };

    let classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h4">{state.count}</Typography>
                            <Button onClick={incrCount} className={classes.button} variant="contained" color="primary">Increment</Button>
                            <Button onClick={decrCount} className={classes.button} variant="contained" color="secondary">Decrement</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};
export default Counter;