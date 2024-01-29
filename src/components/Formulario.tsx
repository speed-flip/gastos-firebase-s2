import { useState } from 'react';
import * as firebase from 'firebase/firestore';
import db from '../firebaseConf/firebase';

function Formulario() {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    await firebase.addDoc(firebase.collection(db, 'gastos'), {
      nombre,
      cantidad,
    });
    setNombre('');
    setCantidad('');
  }

  return (
    <form className='mx-5' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2 mb-3'>
        <label
          htmlFor='name'
          className='font-bold text-gray-600 uppercase'
        >
          Nombre:
        </label>
        <input
          type="text"
          id='nombre'
          placeholder='Nombre del gasto'
          className='p-2 border-2 rounded bg-gray-50 outline-0 focus:shadow'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
      </div>
      <div className='flex flex-col gap-2 mb-3'>
        <label
          htmlFor='name'
          className='font-bold text-gray-600 uppercase'
        >
          Cantidad:
        </label>
        <input
          type="number"
          id='cantidad'
          placeholder='Cantidad del gasto'
          className='p-2 border-2 rounded bg-gray-50 outline-0 focus:shadow'
          value={cantidad}
          onChange={e => setCantidad(e.target.value)}
        />
      </div>
      <input
        type='submit'
        value={'Guardar'}
        className="w-full py-2 mt-4 font-bold text-center text-white uppercase bg-blue-600 rounded-md hover:cursor-pointer hover:bg-blue-700"
      />
    </form>
  )
}

export default Formulario