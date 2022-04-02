function Reinicio (reload)
{
    return(
        <div className="opcionesReinicio">
            <div className="opcionReinicio">
                <button id="Reinicio" className="reinicio" onClick={reload}>Reinicia la aventura</button>
            </div>
        </div>
    );
}

export default Reinicio;