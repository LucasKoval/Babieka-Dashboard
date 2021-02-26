import React from 'react';
import BoxDetail from '../BoxDetail'
import BoxBlocks from '../BoxBlocks'
import Box from '../box/Box'
import Block from './assets/Block'

function BlockSection() {
    return (
        <div className="row">
            <BoxBlocks title='Categorías en la Base de Datos' />
            <Box title='Listado de Usuarios'>
                <Block name='Casual' />
                <Block name='Fiesta' />
                <Block name='Sale' />
            </Box>
            <BoxDetail title='Ultimo Artículo Cargado' apiUrl='products' />
        </div>
    );
}

export default BlockSection;