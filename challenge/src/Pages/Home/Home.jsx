import React from 'react'
import './Home.scss';
import Closeex from "../../assets/Closeex.png"
import Cards from '../../components/Cards/Cards';

const Home = () => {
  return (
    <div className='main__container'>
       <div className='main__container--close'>
         <img src={Closeex} height={44} width={44}/>
       </div>
       <div className='main__container--title'>Firm Facts</div>
       <div className="divider"></div>
       <Cards/>
    </div>
  )
}

export default Home
