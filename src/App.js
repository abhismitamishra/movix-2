import React, {useState,useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import './App.css';
import {fetchDataFromApi} from './utils/Api';
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration, getGeneres } from "./store/HomeSlice"
import Header from './components/header/Header';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import SearchResult from './pages/search_result/SearchResult';
import Footer from './components/footer/Footer';


function App() {
  // const [count , setCount] = useState(0);
  //const {url} = useSelector((state)=>(state.home))
    
  const dispatch = useDispatch();

  const generesCall = async () => {

    let promises = [];
    let endPoints = ["tv","movie"];
    let allGeneres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({genres}) => {
      return genres.map((item) => (allGeneres[item.id] = item)) 
      
    })
     // return genres.map((item) => (allGeneres[item.id] = item)) 

      dispatch(getGeneres(allGeneres))

 // console.log(allGeneres);
  }
  const fetchApiConfig = async () => {
    const response = await fetchDataFromApi('/configuration');
    const url = {
      backdrop: response.images.secure_base_url+"original",
      poster: response.images.secure_base_url+"original",
      profile: response.images.secure_base_url+"original",

     }
    dispatch(getApiConfiguration(url))
   // console.log(response);
  

  }
  useEffect(()=>{
   
    fetchApiConfig();
    generesCall();
  },[]);
  
  return (
    <BrowserRouter>
        <Header/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:mediaType/:id" element={<Details/>} />
            <Route path="/search/:query" element={<SearchResult/>} />
            <Route path="/explore/:mediaType" element={<Explore/>} />
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
          <Footer/>
    </BrowserRouter>
    // <div>
    //   <p>{url?.total_pages}</p>
        

    // </div>
  );
}

export default App;
