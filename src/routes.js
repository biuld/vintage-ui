import About from './components/About'
import Category from './components/Category'
import Home from './components/Home'
import Tags from './components/Tags'
import Article from './components/Article'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/category', component: Category },
    { path: '/tags', component: Tags }, 
    { name: 'article', path: '/article/:articleId', component: Article, props:true}
]

export default routes
