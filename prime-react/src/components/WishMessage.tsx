import React, {useState} from 'react';
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
    message : string;
}

let WishMessage:React.FC<IProps> = ({}) => {
    let [state , setState] = useState<IState>({
        message : 'Hello'
    });



    let classes = useStyles();
    return (
        <React.Fragment>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardHeader title="Wish Message" className={classes.cardHeader}/>
                        <CardContent>
                            <Typography variant="h4">{state.message}</Typography>
                            <Button onClick={() => setState({message : 'Good Morning'})} className={classes.button} variant="contained" color="primary">Good Morning</Button>
                            <Button onClick={() => setState({message : 'Good Afternoon'})} className={classes.button} variant="contained" color="secondary">Good Afternoon</Button>
                            <Button onClick={() => setState({message : 'Good Evening'})} className={classes.button} variant="contained" color="default">Good Evening</Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};
export default WishMessage;