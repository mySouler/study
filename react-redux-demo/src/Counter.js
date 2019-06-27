import React,{useState,useEffect} from 'react';

import { connect } from 'react-redux';
import {decrement,increment,reset} from './store/actions'



/*
  经过4次测试
  还是常规的redux数据传输比较合适  (第3次)
  
  结合hook 像是多此一举 多了代码 多了处理函数 意义不大




  第5次实验  用redux-thunk这个可以返回一个 有副作用的。。。

*/


function Counter(props) {

  /*hook和redux结合  一次实验*/
  // const [count,setCount] = useState(props) 
  /*hook和redux结合  二次实验*/
  //const [,setCount] = useState(props) 
  /* 三次实验  常规调用 */
  const handle = (callback)=>callback()

  /*hook和redux结合  四次实验
  const [count,setCount] = useState(props) 
  useEffect(()=>{
    setCount(()=>props)
  },[props])
  */ 

//注意
  return (

      /*
          hook和redux结合  四次实验
          我想用hook去同步redux数据  解决第三版的问题  自己思索了一下 用useEffect手动更新 state 成功了 数据正常同步了  
          但是这样的数据传递似乎更复杂了 每次都要去手动更新   就像setState一样了 多此一举了  代码也多了 感觉不理想 这种方式不合适 
      */
      // <div className="App">
      //   <div className="appBox">
      //     {/* 第一版 
      //       <span onClick={()=>setCount(props.dispatch(decrement()))}>-</span> 
      //     */}
      //     <span onClick={()=>setCount(()=>{props.decrement();return props})}>-</span> 
      //     <div>{count.count}</div>
      //     {/* <span onClick={()=>setCount(props.dispatch(increment()))}>+</span> */}
      //     <span onClick={()=>setCount(()=>{props.increment();return props})}>+</span>
      //   </div>
      //   {/* <button onClick={()=>setCount(props.dispatch(reset()))}>
      //     重置
      //   </button> */}
      //   <button onClick={()=>setCount(()=>{props.reset();return props})}>
      //     重置
      //   </button>
      // </div>

      /*
        三次实验 常规调用
      */
      <div className="App">
        <div className="appBox">
          <span onClick={()=>handle(props.decrement)}>-</span> 
          <div>{props.count}</div>
          <span onClick={()=>handle(props.increment)}>+</span>
        </div>
        <button onClick={()=>handle(props.reset)}>
          重置
        </button>
      </div>

      /*
        二次实验 可以同步  但是我只使用了setCount函数调用了 dispatch  并没有用申明的 state 我就删掉了state
      */
      // <div className="App">
      //   <div className="appBox">
      //     {/* 第一版 
      //       <span onClick={()=>setCount(props.dispatch(decrement()))}>-</span> 
      //     */}
      //     <span onClick={()=>setCount(()=>props.decrement())}>-</span> 
      //     <div>{props.count}</div>
      //     {/* <span onClick={()=>setCount(props.dispatch(increment()))}>+</span> */}
      //     <span onClick={()=>setCount(()=>props.increment())}>+</span>
      //   </div>
      //   {/* <button onClick={()=>setCount(props.dispatch(reset()))}>
      //     重置
      //   </button> */}
      //   <button onClick={()=>setCount(()=>props.reset())}>
      //     重置
      //   </button>
      // </div>


      /*
          hook和redux结合  一次实验
          我想用hook去同步redux数据 结果是每次都是慢了一次数据 返回的是上一次的数据  刚接触 这个bug后期再去解决 目前还不知道咋回事

          写完第四次实验 似乎明白了数据为什么是上一次的数据了  我虽然手动setCount了 然后返回了 props 但是diapatch之后父组件才把store更新了 
          我return的pops依旧是上一次的数据
        
      */
      // <div className="App">
      //   <div className="appBox">
      //     {/* 第一版 
      //       <span onClick={()=>setCount(props.dispatch(decrement()))}>-</span> 
      //     */}
      //     <span onClick={()=>setCount(()=>{props.decrement();return props})}>-</span> 
      //     <div>{count.count}</div>
      //     {/* <span onClick={()=>setCount(props.dispatch(increment()))}>+</span> */}
      //     <span onClick={()=>setCount(()=>{props.increment();return props})}>+</span>
      //   </div>
      //   {/* <button onClick={()=>setCount(props.dispatch(reset()))}>
      //     重置
      //   </button> */}
      //   <button onClick={()=>setCount(()=>{props.reset();return props})}>
      //     重置
      //   </button>
      // </div>
  );
}

//--------- 第一版  
function mapStateToProps(state) {
    return {
      count: state.count
    };
}

//--------- 第二版
// 在这个对象中, 属性名会成为 prop 的 names,
// 属性值应该是 action 生成器函数.
// 它们跟 `dispatch` 绑定起来.
const mapDispatchToProps = {
  increment,
  decrement,
  reset
};
/*--------- 第一版
export default connect(mapStateToProps)(Counter);
*/
//-------- 第二版
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
