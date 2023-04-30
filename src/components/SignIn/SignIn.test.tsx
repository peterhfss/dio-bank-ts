import { login } from "../../services/login";

describe('login', () =>{

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Exibir um alert de boas vindas', ()=>{
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo(a) ao sistema do DIO BANK!');
    })
});