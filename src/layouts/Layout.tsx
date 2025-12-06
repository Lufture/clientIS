import { Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext' // 1. Importar el hook

export default function Layout() {
  const { logout } = useAuth(); // 2. Obtener la función logout

  return (
    <>
        <header className='bg-slate-800'>
            {/* 3. Agregué flex, justify-between e items-center para alinear título y botón */}
            <div className='mx-auto max-w-6xl py-10 flex justify-between items-center px-5 lg:px-0'>
                <h1 className='text-4xl font-extrabold text-white'>
                    Administrador de Productos
                </h1>

                {/* 4. Botón de Logout */}
                <button
                    onClick={() => logout()}
                    className="rounded-md bg-red-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-red-700 transition-colors"
                >
                    Cerrar Sesión
                </button>
            </div>
        </header>
        <main className='mt-10 mx-auto max-w-6xl p-10 bg-white rounded-md shadow-md'>
            <Outlet/>
        </main>
    </>
  )
}