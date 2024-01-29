import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import * as firebase from 'firebase/firestore';
import db from './firebaseConf/firebase';

function App() {

  const [gastos, setGastos] = useState<any[]>([]);

  async function getGastos() {
    const path = firebase.collection(db, 'gastos');
    const expenses = await firebase.getDocs(path);
    setGastos(
      expenses.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    );
  }

  async function deleteExpense(id: string) {
    const confirmar = confirm('¿Desea eliminar este gasto?');
    if (confirmar) {
      const expense = firebase.doc(db, 'gastos', id);
      await firebase.deleteDoc(expense);
      getGastos();
    }
  }

  useEffect(() => {
    getGastos();
  }, []);

  return (
    <main className="container items-center gap-20 mx-auto mt-20 md:grid md:grid-cols-2">
      <Formulario />
      <section className='flex flex-col m-5 md:flex-row'>
        <ul>
          {gastos.map(gasto => (
            <li className='flex justify-between mb-4' key={gasto.id}>
              <div>
                <p className='font-bold'>Nombre: {''}
                  <span className='font-normal capitalize'>{gasto.nombre}</span>
                </p>
                <p className='font-bold'>Cantidad: {''}
                  <span className='font-normal capitalize'>{gasto.cantidad}</span>
                </p>
              </div>
              <button onClick={() => deleteExpense(gasto.id)} className='px-2 text-white bg-red-600 rounded hover:bg-red-700'>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
