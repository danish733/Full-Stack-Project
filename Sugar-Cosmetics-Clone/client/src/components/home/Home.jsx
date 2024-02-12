import React, {useEffect} from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import Slide from './Slide';
import Refer from './Refer';
import Deals from './Deals';
import JustIn from './JustIn';
import Lalove from './Lalove';
import TopPicks from './TopPicks';
import Gifting from './Gifting';
import SuperSaver from './SuperSaver';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';


function Home() {
  const {products} = useSelector(state => state.getProducts)
  console.log(products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div>
      <Navbar />
      <Banner />
      <Slide products={products}/>
      <Refer/>
      <Deals/>
      <JustIn products={products}/>
      <Lalove/>
      <TopPicks/>
      <Gifting products={products}/>
      <SuperSaver products={products}/>
    </div>
  )
}

export default Home
