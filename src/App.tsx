import React from 'react'
import { Board } from 'components/Board/Board'
import { Layout } from 'components/Layout/Layout'
import { ActionBar } from 'components/ActionBar/ActionBar'
import { Provider } from 'react-redux'
import { store } from 'store/store'

export type AppProps = {}

export const App: React.FC<AppProps> = () => {
  return (
    <Provider store={store}>
      <Layout>
        <ActionBar />
        <Board />
      </Layout>
    </Provider>
  )
}
