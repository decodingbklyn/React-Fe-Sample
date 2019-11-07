import React from 'react'
import '../App.css'
import Header from './Header/Header'
import Carousel from './Carousel/Carousel'
import Article from './Article/Article'
import articleData from './../Utils/data/data.json'

function App() {


  return (
    <div className="app">
      <header className="app--header">
        <Header />
      </header>
      <section className="app--jumbotron">
        <Carousel />
      </section>
      <main className="app--articles">
        <div>
          {
            articleData.map( data => <Article 
                                        img={data.img}
                                        date={data.date}
                                        title={data.title}
                                        author={data.author}
                                    />)
          }
        </div>
      </main>
      <footer className="app--footer">
          © 2017 — SPARTA PLAESENT - instagram - facebook - twitter
      </footer>
    </div>
  );
}

export default App
