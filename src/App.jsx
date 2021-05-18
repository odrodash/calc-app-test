/* eslint no-eval: 0 */
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import Operations from './components/Operations';
import Result from './components/Result';
import { useState } from 'react';
import words from 'lodash.words'
import './App.css';

const App = () => {
  const [stack, setStack] = useState("")
  const items = words(stack, /[^-^+^*^/]+/g)
  const value = items.length > 0 ? items[items.length-1] : 0
  
  return (
    <main className="react-calculator">
      <Result value={value.toString()} />
      
      <Numbers onClickNumber={ number => {
        setStack(`${stack}${number}`)
      }} />

      <div className="functions">
        <Functions 
          onContentClear={() => {
            setStack("")
            }
          }
          onDelete={() => {
            if  (stack.length > 0) {
              const newStack = stack.substring(0, stack.length - 1)
              setStack(newStack)
              }
            }
          }
        />
      </div>

      <div className="math-operations">
        <Operations onClickOperation={
          operation => {
            setStack(`${stack}${operation}`)
          }

        }
        onClickEqual={
          equal => {
            setStack(eval(stack).toString())
          }
        } />
      </div>

    </main>
  )
}
export default App;
