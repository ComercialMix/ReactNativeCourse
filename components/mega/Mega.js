import React from 'react'
import {Text} from 'react-native'
import Estilo from '../style'

export default class Mega extends React.Component{
   
    //  ** Pode ser usado dessa forma**
    //
    // constructor(props){
    //     super(props)
    //     this.estado = {
    //         qtdNumeros: this.props.qtdNumeros +100} 
    // }
    //
    // ** Ou dessa forma:

    estado = {
        qtdNumeros: this.props.qtdNumeros +400
    }

    alterarQtdNumeros(){
        this.setState({qtdeNumeros: qtde})
    }

    render(){
        return(
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena: 
                {/* {this.props.qtdNumeros} */}
                {this.state.qtdeNumeros}
            </Text>
        )
    }0
}