import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import { getPosts } from '../actions/posts'
import memories from '../assets/images/memories.png'
import Posts from '../components/Posts/Posts'
import Form from '../components/Form/Form'
import useStyles from '../styles/styles'
import { useDispatch } from 'react-redux'

export default function Home() {
  const classes = useStyles()
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={ classes.appBar } position="static" color="inherit">
        <Typography className={ classes.heading } variant="h2" align="center">
          Memories
        </Typography>
        <Image src={memories} alt="memories" className={ classes.image } height={50} width={50} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}