import React, { useState } from "react";
import Swal from "sweetalert2";
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import "./SectionForm.css";

function SectionForm({ addAlumno }) {
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        cinta: '',
        dias: [],
        horario: '',
        tutor: '',
        tel_tutor: '',
        mensualidad: '',
        fechainicial: '',
    });

    const cintas = ["Blanca", "Amarilla", "Verde", "Azul", "Roja", "Negra"];
    const diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

    const handleFieldChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === "checkbox") {
            setValues(prevValues => ({
                ...prevValues,
                dias: checked ? [...prevValues.dias, value] : prevValues.dias.filter(dia => dia !== value)
            }));
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const alumno = {
            nombre: values.nombre,
            apellido: values.apellido,
            edad: values.edad,
            cinta: values.cinta,
            dias: values.dias,
            horario: values.horario,
            tutor: values.tutor,
            tel_tutor: values.tel_tutor,
            mensualidad: values.mensualidad,
            fechainicial: values.fechainicial,
        };

        addAlumno(alumno);

        Swal.fire({
            title: "Registro exitoso",
            icon: "success"
        });

        setValues({
            nombre: '',
            apellido: '',
            edad: '',
            cinta: '',
            dias: [],
            horario: '',
            tutor: '',
            tel_tutor: '',
            mensualidad: '',
            fechainicial: '',
        });
    };

    return (
        <div id="form_section">
            <form onSubmit={handleSubmit}>
                <Field 
                    type="text" 
                    placeholder="Nombre" 
                    text="Nombre" 
                    val={values.nombre} 
                    fnVal={(value) => setValues({ ...values, nombre: value })} 
                />
                <Field 
                    type="text" 
                    placeholder="Apellido" 
                    text="Apellido" 
                    val={values.apellido} 
                    fnVal={(value) => setValues({ ...values, apellido: value })} 
                />
                <Field 
                    type="number" 
                    placeholder="Edad" 
                    text="Edad" 
                    val={values.edad} 
                    fnVal={(value) => setValues({ ...values, edad: value })} 
                />
                <div style={{ width: "100%" }}>
                    <Label text="Cinta" />
                    <select 
                        name="cinta" 
                        value={values.cinta} 
                        onChange={handleFieldChange} 
                        style={{
                            width: "100%", 
                            height: "40px", 
                            border: "1px gray solid", 
                            borderRadius: "5px", 
                            fontSize: "20px", 
                            color: "#000000", 
                            padding: "0 10px"
                        }}
                    >
                        <option value="">Seleccione una cinta</option>
                        {cintas.map((cinta) => (
                            <option key={cinta} value={cinta}>{cinta}</option>
                        ))}
                    </select>
                </div>
                <div style={{ width: "100%" }}>
                    <Label text="Días" />
                    {diasDeLaSemana.map((dia) => (
                        <label key={dia} style={{ display: "block", marginBottom: "5px" }}>
                            <input
                                type="checkbox"
                                name="dias"
                                value={dia}
                                checked={values.dias.includes(dia)}
                                onChange={handleFieldChange}
                            />
                            {dia}
                        </label>
                    ))}
                </div>
                <Field 
                    type="text" 
                    placeholder="Horario" 
                    text="Horario" 
                    val={values.horario} 
                    fnVal={(value) => setValues({ ...values, horario: value })} 
                />
                <Field 
                    type="text" 
                    placeholder="Tutor" 
                    text="Tutor" 
                    val={values.tutor} 
                    fnVal={(value) => setValues({ ...values, tutor: value })} 
                />
                <Field 
                    type="number" 
                    placeholder="Teléfono del tutor" 
                    text="Teléfono del tutor" 
                    val={values.tel_tutor} 
                    fnVal={(value) => setValues({ ...values, tel_tutor: value })} 
                />
                <Field 
                    type="number" 
                    placeholder="Mensualidad" 
                    text="Mensualidad" 
                    val={values.mensualidad} 
                    fnVal={(value) => setValues({ ...values, mensualidad: value })} 
                />
                <Field 
                    type="date" 
                    placeholder="Fecha de inicio" 
                    text="Fecha de inicio" 
                    val={values.fechainicial} 
                    fnVal={(value) => setValues({ ...values, fechainicial: value })} 
                />
                <Button title="Guardar" onclick={handleSubmit} />
            </form>
        </div>
    );
}

export default SectionForm;
