
import { deleteProducto, getProductos, updateProductAvailability } from "../services/ProductosService";
import { redirect, type ActionFunctionArgs } from "react-router-dom";

export async function action({ request }: ActionFunctionArgs) {
  try{
  console.log('se ejecuta')
  const data = Object.fromEntries(await request.formData());
  console.log(data)
  const updatedProduct = await updateProductAvailability(+data.id);
  console.log('Producto actualizado en action:', updatedProduct);
  return updatedProduct;}
  catch(e){
    console.log('Error en action:', e);
    return { error: e };
  }
}

export async function loader() {
  return getProductos();
}

export async function action2({params}: ActionFunctionArgs){
    if(params.id!==undefined) {

        await deleteProducto(+params.id );

        return redirect('/');

    }
}
