import { useState,useEffect } from "react";
import { FormEstilado, LabelEstilado, InputEstilado, BotonEstilado } from "./formLocalStorage.styled";
export default function FormLocalStorage({callBackSetData, callBackSetShowList}) {
	const [values, setValues] = useState({
		numIne: '',
		nombre: '',
		apellido: '',
		telefono: '',
		correo: ''
	});

	const agregarRegistro = (values) => {
		callBackSetData(values);
	};

	const HandleChange = (e) => {
		const { name, value } = e.target;
		setValues((prevData) => (
			{
				...prevData,
				[name]: value
			}
		));
	};

	const HandleSubmit = (e) => {	
		e.preventDefault();
		callBackSetShowList(true);
		agregarRegistro(values);
	}

	const HandleCancel = (e) => {
		e.preventDefault();
		setValues({
			id: '',
			numIne: '',
			nombre: '',
			apellido: '',
			telefono: '',
			correo: ''
		});
		window.location.reload();
	}
 
	return (
		<>
			<FormEstilado onSubmit={HandleSubmit}>
				<h1>Registro</h1>
				<LabelEstilado htmlFor="numIne">Num. Ine:</LabelEstilado>
				<InputEstilado id="numIne" name="numIne" onChange={HandleChange} type="text" value={values.numIne} required/>
				<LabelEstilado htmlFor="nombre">Nombre</LabelEstilado>
				<InputEstilado id="nombre" name="nombre" onChange={HandleChange} type="text" value={values.nombre} required/>
				<LabelEstilado htmlFor="apellido">Apellido Paterno</LabelEstilado>
				<InputEstilado id="apellido" name="apellido" onChange={HandleChange} type="text" value={values.apellido} required></InputEstilado>
				<LabelEstilado htmlFor="telefono">Teléfono</LabelEstilado>
				<InputEstilado id="telefono" name="telefono" onChange={HandleChange} type="text" value={values.telefono} required></InputEstilado>
				<LabelEstilado htmlFor="correo">Correo</LabelEstilado>
				<InputEstilado id="correo" name="correo" onChange={HandleChange} type="email" value={values.correo} required></InputEstilado>
				<BotonEstilado type="submit">Registrar estudiante</BotonEstilado>		
				<BotonEstilado onClick={HandleCancel}>Cancelar</BotonEstilado>
			</FormEstilado>
		</>
	)
};