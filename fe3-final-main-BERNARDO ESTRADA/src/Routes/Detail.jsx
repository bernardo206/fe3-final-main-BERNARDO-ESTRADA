import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  const getDentist = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      setDentist(data);
    } catch (error) {
      console.error('Error fetching dentist:', error);
    }
  };

  useEffect(() => {
    getDentist();
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Nombre: {dentist.name}</h1>
      <h1>Email: {dentist.email}</h1>
      <h1>Teléfono: {dentist.phone}</h1>
      <h1>Sitio web: {dentist.website}</h1>
    </main>
  );
};

export default Detail;