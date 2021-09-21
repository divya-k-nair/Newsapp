import { AppBar, Toolbar, Typography } from '@mui/material'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar>

                    <Toolbar>
                    <Typography>NEWS APP</Typography>
                    <Link to="/">Getnews1</Link>
                    <Link to="/News2">Getnews2</Link>
                    <Link to="/News3">Getnews3</Link>
                    <Link to="/News4">Getnews4</Link>
                    </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}
