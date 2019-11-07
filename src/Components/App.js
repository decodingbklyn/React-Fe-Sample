import React from 'react'
import Masonry from 'react-masonry-css'
import Header from './Header/Header'
import Carousel from './Carousel/Carousel'
import Article from './Article/Article'
import articleData from './../Utils/data/data.json'

function App() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1
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
            articleData.map(( data )=> <Article 
                                        className="my-masonry-grid_column"
                                        key={ data.id }
                                        articleId= { data.id }
                                        imgHeight={ data.height }
                                        img={ data.img }
                                        date={ data.date }
                                        title={ data.title }
                                        author={ data.author }
                                    />)
          }
        </Masonry>
      </main>
      <footer className="app--footer">
          © 2017 — SPARTA PLAESENT - instagram - facebook - twitter
      </footer>
    </div>
  );
}

export default App
