import React from 'react';
import { render } from '@testing-library/react';
import Transacao from "./Transacao";

describe('Componente de transação de extrato', () => {
    it('O snapshot do component sempre deve permanecer o mesmo', 
    () => {
        const { container } = render(<Transacao
        data='08/09/2020'
        tipo='saque'
        valor='20.00'
        />)

        expect(container.firstChild).toMatchSnapshot();
    })
})