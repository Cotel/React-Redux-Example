import React, { Component } from 'react'
import { Route } from 'react-router'
import Root from './Root'

const AppRoutes = (
    <Route path="/(:filter)" component={Root} />
)

export default AppRoutes
