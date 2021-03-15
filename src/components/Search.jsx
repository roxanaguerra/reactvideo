import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getVideoSearch } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = (props) => {

  const { isHome, getVideoSearch } = props;

  const MainTitleText = '¿Que quieres ver hoy?';
  const MainInputPlaceholder = 'Buscar video...';

  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (event) => {
    getVideoSearch(event.target.value);
    // console.log('search: ', getVideoSearch);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>{MainTitleText}</h2>
      <input
        type='text'
        className={inputStyle}
        placeholder={MainInputPlaceholder}
        onKeyUp={handleInput}
      />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    searchResult: state.searchResult,
  };
};

const mapDispatchToProps = {
  getVideoSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
