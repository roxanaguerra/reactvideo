/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState';

export const App = () => {
  const videos = useInitialState(API);

  return (
    <div>
      <Header />
      <Search />
      {videos && Object.keys(videos).map((categorie) => {
        if (videos[categorie].length) {
          return (
            <Categories
              title={categorie}
              key={categorie}
            >
              <Carousel>
                {videos[categorie].map((video) => {
                  return (
                    <CarouselItem
                      cover={video.cover}
                      alt={video.title}
                      key={video.id}
                      year={video.year}
                      title={video.title}
                      contentRating={video.contentRating}
                      duration={video.duration}
                    />
                  );
                })}
              </Carousel>
            </Categories>
          );
        }
        return null;
      })}
      <Footer />
    </div>
  );
};

// const App = () => {

//   const initialState = useInitialState(API);
//   console.log(initialState);
//   // const [videos, categories] = useInitialState(API);

//   return (
//     initialState.length === 0 ? <h1>Cargando...</h1> : (
//       <div className='App'>
//         <Header />
//         <Search />

//         {initialState.mylist.length > 0 && (
//           <Categories title='Mi Lista'>
//             <Carousel>
//               <CarouselItem />
//             </Carousel>
//           </Categories>
//         )}

//         <Categories title='Tendencias'>
//           <Carousel>
//             {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
//           </Carousel>
//         </Categories>

//         <Categories title='Originales'>
//           <Carousel>
//             {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
//           </Carousel>
//         </Categories>

//         <Footer />
//       </div>
//     ));
// };

export default App;

// const App = () => {

//   // USANDO HOOK
//   const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

//   useEffect(() => {
//     fetch('http://localhost:3000/initialState')
//       .then((response) => response.json())
//       .then((data) => {
//         setVideos(data);
//         setCategories(Object.keys(data));
//       });
//   }, []);
//   console.log(videos);

// GENERAL LAS CATEGORIAS CON MAP
// const [videos, categories] = useInitialState(API);
// return (
// {categories.map((category) => (
//   videos[category].length > 0 && (
//     <Categories title={category}>
//       <Carousel>
//         {videos[category].map((item) => (
//           <CarouselItem key={item.id} {...item} />
//         ))}
//       </Carousel>
//     </Categories>
//   )))}

