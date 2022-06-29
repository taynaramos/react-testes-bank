import React from 'react'
import { render, screen } from '@testing-library/react'
import App, { calcularNovoSaldo } from './App'

describe('Componente principal', () => {
    describe('Quando eu abro o app do banco', () => {

        it('o nome é exibido', () => {
            render(<App />);
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        })
        
        it('o saldo é exibido', () => {
            render(<App />);
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        })

        it('o botão de realizar transação é exibido', () => {
            render(<App />);
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        })
    })

    describe('Quando eu realizo uma transação', () => {
        it('que é um saque, o valor vai diminuir', () => {

            const valores = {
                transacao: 'saque',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100)
        })

        it('que é um deposito, o valor vai aumentar', () => {

            const valores = {
                transacao: 'deposito',
                valor: 50
            }

            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(200)
        })
    
        it('que é um saque de um valor maior do que tem na conta', () => {

            const valores = {
                transacao: 'saque',
                valor: 500
            }

            const novoSaldo = calcularNovoSaldo(valores, 100)

            expect(novoSaldo < 0).toBe(false)
        })
    })

})