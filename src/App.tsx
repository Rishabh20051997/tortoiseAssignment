import React, { Component } from 'react'
import { observer, Provider } from 'mobx-react'

import stores from './stores'
import { LogBox } from 'react-native'
import { HomeScreen } from './screens'

type State = {
    //
}

type Props = {
    //
}

@observer
class App extends Component<Props, State>  {

    componentDidMount() {
        LogBox.ignoreAllLogs(true)
    }

    render() {
        return (
            <Provider {...stores}>
               <HomeScreen/>
            </Provider>
        )
    }
}

export default App