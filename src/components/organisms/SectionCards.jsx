import React from "react";
import Card from "../molecules/Card";
import './SectionCards.css'

function SectionCards({ listaAlumnos }) {
    const cards = [];
    let current = listaAlumnos.head;

    if (current) {
        do {
            const alumno = current.data;
            cards.push(
                <Card
                    key={`${alumno.nombre}-${alumno.apellido}`}
                    title={`${alumno.nombre} ${alumno.apellido}`}
                    text={`Edad: ${alumno.edad}, Cinta: ${alumno.cinta}, Días: ${alumno.dias.join(', ')}, Horario: ${alumno.horario}, Tutor: ${alumno.tutor}, Tel: ${alumno.tel_tutor}, Mensualidad: ${alumno.mensualidad}, Fecha de inicio: ${alumno.fechainicial}`}
                />
            );
            current = current.next;
        } while (current !== listaAlumnos.head);
    }

    return (
        <div id="section_cards">
            {cards}
        </div>
    );
}

export default SectionCards;
