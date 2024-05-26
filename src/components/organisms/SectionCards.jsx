import React from "react";
import Card from "../molecules/Card";

function SectionCards({ listaAlumnos }) {
    const renderAlumnsCards = () => {
        const cards = [];
        let current = listaAlumnos.head;

        while (current) {
            const alumno = current.data;
            cards.push(
                <Card
                    key={`${alumno.nombre}-${alumno.apellido}`}
                    title={`${alumno.nombre} ${alumno.apellido}`}
                    text={`Edad: ${alumno.edad}\nCinta: ${alumno.cinta}\nDías: ${alumno.dias.join(', ')}\nHorario: ${alumno.horario}\nTutor: ${alumno.tutor}\nTeléfono del tutor: ${alumno.tel_tutor}\nMensualidad: ${alumno.mensualidad}\nFecha de inicio: ${alumno.fechainicial}`}
                />
            );
            current = current.next;
            if (current === listaAlumnos.head) break; // Para evitar loops infinitos en listas circulares
        }
        return cards;
    };

    return (
        <div>
            {renderAlumnsCards()}
        </div>
    );
}

export default SectionCards;

