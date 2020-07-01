import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../menuItem/menuItem';
import Button from '../button/button';
import './directory.scss'


class Directory extends Component {
    state = {
        guitarDetails: [
            { title: "Fender", id: '1', imageLink: "https://peachguitars.2dimg.com/114/_48a2884_31e243fd20.jpg", size: "small", linkUrl: "fender", color: "rgb(105,131,170)" },
            { title: "Gibson", id: '2', imageLink: "https://www.kloppmann-electrics.com/media/image/be/3e/d7/AF_0001_600x600.jpg", size: "small", linkUrl: "gibson", color: "rgb(130,115,151)" },
            { title: "Other Brands", id: '3', imageLink: "https://davesguitar.com/wp-content/uploads/2019/04/multiple-gretsch.jpg", size: "small", linkUrl: "other", color: "rgb(255,162,153)" },
            { title: "Acoustic", id: '4', imageLink: "https://c4.wallpaperflare.com/wallpaper/82/537/147/music-guitar-instrumento-wallpaper-preview.jpg", size: "large", linkUrl: "acoustic", color: "rgb(141,177,171)" },
            { title: "Electric", id: '5', imageLink: "https://www.gearank.com/sites/default/files/styles/large/public/electric-under-500-2.jpg?itok=BKnVBGPA", size: "large", linkUrl: "electric", color: "rgb(50,50,50)" }
        ]
    }

    render() {
        return (
            <Fragment>
                <header className="home-image">
                    <img src={`/assets/images/home.jpg`}></img>
                    <section className='hero-header-text'>
                        <h1>Welcome to GuitarShed</h1>
                        <h4>Where you can check out but you can never buy...</h4>
                        <Button><Link to="/shop">See our Guitars</Link></Button>
                    </section>
                </header>
                <div className="directory-menu">
                    {this.state.guitarDetails.map(guitar => {
                        const { id, ...otherProps } = guitar;
                        return <MenuItem key={id} {...otherProps} />
                    })}
                </div>
            </Fragment>
        );
    }
}

export default Directory;