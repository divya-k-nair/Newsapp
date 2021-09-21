import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'

export default class GetNews4 extends Component {
    state={
        News:[]
    }
    FetchNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=010c65631b9e434e9155b5e7da91d5a9").then(
            (response)=>{
                console.log(response.data.articles)
                this.setState(
                    {
                        News:response.data.articles
                    }
                )
            }
        )
    }
    render() {
        return (
            <div>
                <Grid container style={{padding:80}}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                        onClick={this.FetchNews}
                        variant="contained"
                        color="primary"
                        fullWidth
                        >GetNews</Button>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Author</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Content</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.News.map(
                                        (value,index)=>{
                                            return<TableRow>
                                                <TableCell><Avatar src={value.urlToImage}/></TableCell>
                                                <TableCell>{value.author}</TableCell>
                                                <TableCell>{value.title}</TableCell>
                                                <TableCell>{value.description}</TableCell>
                                                <TableCell>{value.publishedAt}</TableCell>
                                                <TableCell>{value.content}</TableCell>
                                            </TableRow>
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                   </Grid>

                </Grid>
                
            </div>
        )
    }
}
