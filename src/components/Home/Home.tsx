import React from 'react';
import { Link } from 'react-router-dom';

// Imports for styling
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import marvel_image from '../../assets/images/Heroe-spider-man-blue-technology-city-1504327-pxhere.com.jpg';
import marvel_logo from '../../assets/images/Marvel_Studios_logo.jpg';

// Imports for Authorization
import { AuthCheck } from 'reactfire';
import { Suspense } from 'react';

interface Props {
  title: string;
}

// Setting up Material-UI styles for Home
const useStyles = makeStyles({
  root: {
    padding: '0',
    margin: '0'
  },
  navbar_container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    margin: '0 0 0 0.45em',
  },
  logo_image: {
    maxWidth: '25%',
  },
  logo_a: {
    color: 'rgb(28, 24, 22)'
  },
  logo_navigation: {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
  },
  navigation: {
    display: 'flex'
  },
  nav_a: {
    display: 'block',
    padding: '1em',
    color: 'black'
  },
  main: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${marvel_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
  },
  main_text: {
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
  },
  footer_text: {
    textAlign: 'center',
    position: 'relative',
    color: 'white',
    marginTop: '97vh',
  }
})

export const Home = (props: Props) => {
  // New Classes Variable using useStyles hook
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav>
        <div className={classes.navbar_container}>
          <h1 className={`${classes.logo}`}>
            <Link to="/"><img className={`${classes.logo_image}`} src={marvel_logo} alt-text="marvel logo" /></Link>
          </h1>
          <ul className={`${classes.navigation} ${classes.logo_navigation}`}>
            <li>
              <Link to="/" className={classes.nav_a}>Home</Link>
            </li>
            <Suspense fallback={'loading...'}>
              <AuthCheck fallback={
                <li>
                  <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                </li>
              }>
                <li>
                  <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                </li>
                <li>
                  <Link to="/signin" className={classes.nav_a}>Sign Out</Link>
                </li>
              </AuthCheck>
            </Suspense>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>
        <div className={classes.main_text}>
          <h1>{props.title}</h1>
          <p>Who doesn't like Marvel Characters</p>
          <Button color='primary' variant='contained'>Click Me</Button>
        </div>
      </main>
      <footer className={classes.footer_text}>
        <h6>Photo by <strong><a href="https://pxhere.com/en/photographer/1894767?utm_content=clipUser&utm_medium=referral&utm_source=pxhere">marvinboybrito</a></strong> from <strong><a href="https://pxhere.com/en/photo/1504327?utm_content=clipUser&utm_medium=referral&utm_source=pxhere">PxHere</a></strong></h6>
      </footer>
    </div>
  )
}