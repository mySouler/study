import React, {Fragment,useState,useEffect} from 'react'
import usePrevious from "./fristUse"

function Demo1(){
  const [count,setCount] = useState(0);
  const handleAlertClick = () => {
    setTimeout(() => {
      alert(`Yout clicked me: ${count}`)
    }, 3000)
  }
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    setTimeout(() => {
      console.log(`Yout clicked ${count} times`)
    }, 3000)
  }, [count]);
  const prevCount = usePrevious(count);
  return (
    <Fragment>
        <p>我是{count}次</p>
        <button onClick={() => setCount(count+1)}>点我试试</button>
        <h1>Now: {count}, before: {prevCount}</h1>
        <button onClick={handleAlertClick}>Show alert</button>
    </Fragment>
  )
}


/*
    const [count,setCount] = useState(0);
    不简写
    let countData = useState(0)
    let count = countData[0];
    let setCount = countData[1];
*/


/*
第一行: 引入 React 中的 useState Hook。它让我们在函数组件中存储内部 state。
第四行: 在 Example 组件内部，我们通过调用 useState Hook 声明了一个新的 state 变量。它返回一对值给到我们命名的变量上。
    我们把变量命名为 count，因为它存储的是点击次数。我们通过传 0 作为 useState 唯一的参数来将其初始化为 0。
    第二个返回的值本身就是一个函数。它让我们可以更新 count 的值，所以我们叫它 setCount。
第十二行: 当用户点击按钮后，我们传递一个新的值给 setCount。
    React 会重新渲染 Example 组件，并把最新的 count 传给它。
    乍一看这似乎有点太多了。不要急于求成！如果你有不理解的地方，请再次查看以上代码并从头到尾阅读。
    我们保证一旦你试着”忘记” class 里面 state 是如何工作的，并用新的眼光看这段代码，就容易理解了。
*/

export default Demo1;




