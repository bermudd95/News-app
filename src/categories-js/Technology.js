import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from '../Components/news-item'

const Technology = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4880c280dfe1406da8f39eed721f85fc')
        console.log(res)
        setArticles(res.data.articles)
        }
    getArticles()
    }, [])
  return (
    <div>
      {articles.map(article => {
        return (
            <NewsItem 
                title={article.title}
                description={article.description}
                url={article.url}
                urlToImage={article.urlToImage}
            />
        )
      })}
    </div>
  )
}

export default Technology
