import { useContext } from 'react';
import { DataContext } from '../Components/DataContextProvider';
import Card from '../Components/Card';




const Home = () => {
  const { data } = useContext(DataContext);

  
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {data.length ? data.map(dentist => (
      <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
      )) : null}
     </div>
    </main>
  )
}


export default Home;