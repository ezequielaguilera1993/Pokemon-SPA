
import React, { Component, useState } from "react";//esto
import { connect } from "react-redux";//y esto para conectarlo con redux
import { Link } from 'react-router-dom';//si precise routing
import { process, setPunteros } from "../../actions"//actions

import './ToPrincipal.css'; //hoja de estilos

///SOLO SI TIENE QUE LEER EL ESTADO
 function ToPrincipal({ process, setPunteros }) {


    return (<Link to="/principal" > <button>Back</button></Link>)


}




export default connect(null, { process, setPunteros })(ToPrincipal);



