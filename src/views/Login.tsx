// src/views/Login.tsx
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      navigate("/"); // Redirige al dashboard
    } catch (err) {
      setError("Credenciales incorrectas o error de conexión" + err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-4xl font-black text-slate-500 mb-6 text-center">
          Iniciar Sesión
        </h2>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <form onSubmit={handleSubmit} className="space-y-4 mt-5">
          <div>
            <label className="text-gray-800" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-800" htmlFor="password">Contraseña:</label>
            <input
              id="password"
              type="password"
              className="mt-2 block w-full p-3 bg-gray-50 border border-gray-300 rounded"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            className="mt-5 w-full bg-indigo-600 p-2 text-white font-bold text-lg cursor-pointer rounded hover:bg-indigo-500 transition-colors"
            value="Ingresar"
          />
        </form>
      </div>
    </div>
  );
}