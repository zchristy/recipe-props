import React, { Component } from 'react';
import './RecipeApp.css';
import { Recipe } from './Recipe';
import { RecipeList } from './RecipeList';
import { Navbar } from './Navbar';

class RecipeApp extends Component {
  
        
    render(){
        return (
            <div className="app">
                <Navbar />
                <RecipeList />
            </div>
        );
    }
}

export default RecipeApp;
