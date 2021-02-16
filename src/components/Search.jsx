import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {
  const MainTitleText = '¿Que quieres ver hoy?';
  const MainInputPlaceholder = 'Buscar video...';
  return (
    <section className='main'>
      <h2 className='main__title'>{MainTitleText}</h2>
      <input type='text' className='input' placeholder={MainInputPlaceholder} />
    </section>
  );
};

export default Search;
