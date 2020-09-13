import React from 'react'
import logo from './public/img/logo.png';
import './public/css/style.css'

export default class Index extends React.Component{
    render(){
        return(
            <>
                <header>
                <img id="logo" src={logo} width="200px" />
                <nav>
                    <ul>
                        <li><a>Home </a> </li>
                        <li><a>About </a> </li>
                        <li><a>Movie List Editor </a> </li>
                        <li><a>Login </a> </li>
                    </ul>   
                </nav>
                </header>
                <section >
                <h1>Daftar Film Film Terbaik</h1>
                <div id="article-list">
                    <div class="article">
                    <a href=""><h3>Lorem Post 1</h3></a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                    </div>
                    <div class="article">
                    <a href=""><h3>Lorem Post 2</h3></a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                    </div>
                    <div class="article">
                    <a href=""><h3>Lorem Post 3</h3></a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                    </div>
                    <div class="article">
                    <a href=""><h3>Lorem Post 4</h3></a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                    </div>
                    <div class="article">
                    <a href=""><h3>Lorem Post 5</h3></a>
                    <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                    </p>
                    </div>
                    <div>
                        <a href=""><h3>Lorem Post 5</h3></a>
                        <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                        </p>
                    </div>
                    <div>
                        <a href=""><h3>Lorem Post 5</h3></a>
                        <p>
                        Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
                        </p>
                    </div>
                </div>
                </section>
                <footer>
                <h5>copyright &copy; 2020 by Sanbercode</h5>
                </footer>

            </>
        )
    }
}