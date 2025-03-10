import './App.css';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';


const App = () => {

    return (
        <>
            <Profile {...userData}/>
            <FriendList friends={friends} />
            <TransactionHistory transactions={transactions}/>
        </>
    )
}

export default App
