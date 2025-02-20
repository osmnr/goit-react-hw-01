import Profile from './components/Profile';
import {userData} from './userData';

const App = () => {

    return (
        <>
            <Profile {...userData}/>
        </>
    )
}

export default App
