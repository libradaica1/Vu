import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const virus = useSelector(state => state.corona.virus);
  console.log(virus);
  
  return(
    <>
      <p>Ket Qua : </p>
    </>
  )
}
export default React.memo(Result);