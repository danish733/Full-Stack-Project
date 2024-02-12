import React from 'react'
import Header from '../header/Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetails } from '../../redux/actions/productActions'
function DetailView() {

  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(()=>{
    dispatch(getProductDetails(id))
  },[dispatch,id])
  return (
    <div>
      <Header/>
      hello
    </div>
  )
}

export default DetailView
