import {useRef,useEffect} from 'react'



function usePrevious(value) {
    const ref = useRef();
    console.log('============ref========================');
    console.log(ref);
    console.log('==============ref======================');
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


export default usePrevious;




