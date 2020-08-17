import React, { Component } from 'react';
import styles from './Cards.module.css';
import { Grid, CardContent, Card, Typography} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
class Cards extends Component{

    render(){
        const { confirmed , recovered , deaths, lastUpdate } = this.props.data
        if (!confirmed + !lastUpdate){
            return <h2 style={{display: "flex",justifyContent: "center",alignItems: "center"}}>Loading...</h2>
        }
        return(
            <div className={styles.container}>
                <Grid container spacing={9} justify='center'>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1}
                                separator=','/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of active cases of Covid 19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1}
                                separator=','/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of cases recovered from covid-19</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1}
                                separator=','/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of deaths due to covid 19</Typography>
                        </CardContent>
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default Cards;