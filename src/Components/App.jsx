/* eslint-disable no-undef */
import React from 'react'
import Masonry from 'react-masonry-css'
import Header from './Header/Header.jsx'
import Carousel from './Carousel/Carousel.jsx'
import Article from './Article/Article.jsx'

const data = [
			{
				'id': 1,
				'title': 'Artisanal iconic cutting-edge business class.', 
				'date': 'JANUARY 12 2017',
				'author': 'Lorem Ipsum', 
				'img': require('../Utils/images/img6.png'),
				'height': 233
			},
			{
				'id': 2,
				'title': 'K-pop extraordinary.', 
				'date': 'JANUARY 18 2017',
				'author': 'Lorem Ipsum',
				'img': require('../Utils/images/img5.png'),
				'height': 524
			},
			{
				'id': 3,
				'title': 'St Moritz uniforms Beams.', 
				'date': 'JANUARY 21 2017',
				'author': 'Lorem Ipsum',
				'img': require('../Utils/images/img3.png'),
				'height': 233
			},
			{
				'id': 4,
				'title': 'Esse airport veniam ryokan soft power.', 
				'date': 'JANUARY 27 2017',
				'author': 'Lorem Ipsum',
				'img': require('../Utils/images/img4.png'),
				'height': 348
			},
			{
				'id': 5,
				'title': 'Sharp bureaux sleepy K-pop carefully curated.', 
				'date': 'FEBRUARY 2 2017',
				'author':  'Lorem Ipsum',
				'img': require('../Utils/images/img2.png'),
				'height': 524
			},
			{
				'id': 6,
				'title': 'Bureaux exquisite delightful carefully curated soft power.', 
				'date': 'FEBRUARY 10 2017',
				'author':  'Lorem Ipsum',
				'img': require('../Utils/images/img1.png'),
				'height': 348
			}
		]			

function App() {
	const breakpointColumnsObj = {    default: 3,
		1024: 2,
		768: 2,
		575: 1
	};

return (
    <div className="app">
        <header className="app--header">
            <Header />
        </header>
        <section className="app--jumbotron">
            <Carousel />
        </section>
        <main className="app--articles">
            <Masonry breakpointCols={ breakpointColumnsObj }
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    >
                {
                    data.map(( artData )=> {
                        return <Article 
                            className="my-masonry-grid_column"
                            key={ artData.id }
                            articleId= { artData.id }
                            imgHeight={ artData.height }
                            img={ artData.img }
                            date={ artData.date }
                            title={ artData.title }
                            author={ artData.author }
                            />
                    })
                }
            </Masonry>
        </main>
        <footer className="app--footer">
            © 2017 — SPARTA PLAESENT - <a href="https://www.instagram.com">instagram</a> - <a href="https://www/facebook.com">facebook</a>- <a href="https://www.twitter.com">twitter</a>
        </footer>
    </div>
  );
}

export default App
