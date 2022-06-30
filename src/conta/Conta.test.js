import React from 'react'
import Conta from './Conta'
import { fireEvent, render, screen } from '@testing-library/react';

describe('Componente de conta', () => {
    it('Exibir o saldo da conta com formatação monetária', () => {
        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta')

        expect(saldo.textContent).toBe('R$ 1000');
    })

    it('Chama a função de realizar transação, quando o botão é clicado', () => {
        // mock de funcao: função que não faz nada, mas que conseguimos checar pelo nome dela se ela foi chamada no nosso teste.
        const funcaoRealizarTransacao = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />) 

        fireEvent.click(screen.getByText('Realizar operação'))
        expect(funcaoRealizarTransacao).toHaveBeenCalled()
    })
})