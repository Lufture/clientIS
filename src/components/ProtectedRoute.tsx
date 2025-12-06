// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) return <div className="p-10 text-center">Cargando...</div>;

  // Si no hay usuario, redirigir al Login
  if (!user) return <Navigate to="/login" replace />;

  // Si hay usuario, renderizar las rutas hijas (Layout, Productos, etc.)
  return <Outlet />;
}