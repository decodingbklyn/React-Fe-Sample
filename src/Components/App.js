import React from 'react'
import Masonry from 'react-masonry-css'
import Header from './Header/Header'
import Carousel from './Carousel/Carousel'
import Article from './Article/Article'

const data = [
  {
      "id": "1",
      "title": "Bureaux exquisite delightful carefully curated soft power.", 
      "date": "FEBRUARY 10 2017",
      "author":  "Lorem Ipsum",
      "img": require("../Utils/images/img1.png"),
      "height": "348"
  },
  {
      "id": "2",
      "title": "Sharp bureaux sleepy K-pop carefully curated.", 
      "date": "FEBRUARY 2 2017",
      "author":  "Lorem Ipsum",
      "img": require("../Utils/images/img2.png"),
      "height": "524"
  },
  {
      "id": "3",
      "title": "St Moritz uniforms Beams.", 
      "date": "JANUARY 27 2017",
      "author": "Lorem Ipsum",
      "img": require("../Utils/images/img3.png"),
      "height": "233"
  },
  {
      "id": "4",
      "title": "Esse airport veniam ryokan soft power.", 
      "date": "JANUARY 21 2017",
      "author": "Lorem Ipsum",
      "img": require("../Utils/images/img4.png"),
      "height": "348"
  },
  {
      "id": "5",
      "title": "K-pop extraordinary.", 
      "date": "JANUARY 18 2017",
      "author": "Lorem Ipsum",
      "img": require("../Utils/images/img5.png"),
      "height": "524"
  },    
  {
      "id": "6",
      "title": "Artisanal iconic cutting-edge business class.", 
      "date": "JANUARY 12 2017",
      "author": "Lorem Ipsum", 
      "img": require("../Utils/images/img6.png"),
      "height": "233"
  }
]
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
            data.map(( data )=> {
              return <Article 
                      className="my-masonry-grid_column"
                      key={ data.id }
                      articleId= { data.id }
                      imgHeight={ data.height }
                      img={ data.img }
                      date={ data.date }
                      title={ data.title }
                      author={ data.author }
                  />
            })
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
