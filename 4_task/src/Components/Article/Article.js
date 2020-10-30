import React, { Component } from 'react';
import './Article.css'

class Article extends Component {
    state = {
        likes: 0,
    }

addHandler = () => {
    this.setState({
        likes: this.state.likes + 1
    });
};

    render() {
        return (
            <div className="Article">
                <img alt="picture" src="https://source.unsplash.com/xrVDYZRGdw4" />
                <h2>Full Stack Web Developer Program</h2>
                <p>Full Stack Web Developer program is designed for adults who want to work as software developers. Studying in the program is very practical in comparison to academic studying. The studies focus 100% on getting the core skills needed as software developers.</p>
                <p>{this.state.likes} people like this article</p>
                <button>Read more</button>
                <button onClick={this.addHandler}>Give a vote</button>
            </div>
        );
    }
}

export default Article;