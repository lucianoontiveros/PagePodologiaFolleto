const BotonCopiar = ({text}) => {
    console.log({text})
    const copiarTexto = ({text}) => {
         console.log(text.valueOf());
         navigator.clipboard
         .writeText(text.valueOf())
         .then(() => console.log("texto copiado"))
         .catch((e) => console.log(e));
    }

    return(
         <>
            <li className="list-group-item itemText">
              <div onClick={() => copiarTexto({text})}>
                <a className="btn btn-secondary" type="button" value="" role="button" aria-disabled="true">Copiar Numero</a>
              </div>
            </li>
         </>
    )
       
} 

export default BotonCopiar