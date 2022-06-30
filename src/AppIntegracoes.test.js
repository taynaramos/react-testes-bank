import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import api from './api'

jest.mock('./api')

describe('Requisições para API', () => {
    it('Exibir lista de transações através da API', async () => {
        api.listaTransacoes.mockResolvedValue([
            {
                "transacao": "saque",
                "valor": "200",
                "data": "29/10/2021",
                "id": 101
              },
              {
                "transacao": "deposito",
                "valor": "20",
                "data": "30/06/2022",
                "id": 102
              },
        ]);

        render(<App />);
        
        expect(await screen.findByText('saque')).toBeInTheDocument()
        
        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })

})