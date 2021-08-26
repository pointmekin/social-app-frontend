import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import reducers from "../reducers"

function MyApp({ Component, pageProps }: AppProps) {

  const store = createStore(reducers, compose(applyMiddleware(thunk)))
  return (
    <Provider store={ store }>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
