import { Button, ButtonContent } from "./components/Button";

import './App.css';
import { Box } from "./components/Box";
import { Title } from "./components/Title";
import { SubTitle } from "./components/SubTitle";
import { Label} from "./components/Label";
import {Input} from "./components/Input";
import { useCallback, useEffect, useState } from "react";

type IFormState = {
  name: string;
  password: string;
}


function App() {

  
  const [formState, setFormState] = useState<IFormState>({name: '', password: ''});
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) =>{
      
      event.preventDefault();

      const {name, password} = formState;
      if(!name || !password){

        window.alert("Preencha todos os campos!");
        // Tratar erro

        return;
      }

      window.alert("Sucesso!");

  },[formState]);


  const [food, setFood] = useState([]);
  
  let url = 'http://localhost:8080/';
  let username = 'joao';
  let password = 'senha123';

  let headers = new Headers();
  
  let encoded = btoa(`${username}:${password}`);
  
  headers.set('Authorization', 'Basic ' + encoded);
  headers.set('Content-Type', 'application/json');
  headers.set('Access-Control-Allow-Origin', '*');  

  useEffect(() => {
    fetch(url + 'food', {
      method: 'GET',
      headers: headers,
      
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setFood(data);
    })
    .catch((err) => {
      console.log(err.message);
      
    });

  }, []);


  return (
    <div>
      <Box auto flexDirection="column">
        <SubTitle fontSize="32px">Entrar</SubTitle>
        <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
                <Label htmlFor="nameInput" className="form-label">Nome</Label>
                <Input 
                  value={formState.name}
                  onChange={event => {
                    setFormState({
                      ...formState, 
                      name: event.currentTarget?.value || ''
                    })
                  }} 
                  type="text" className="form-control" id="nameInput" />
            </div>
            
            <div className="mb-3">
                <Label htmlFor="passwordInput" className="form-label">Password</Label>
                <Input 
                  value={formState.password}
                  onChange={event => {
                    setFormState({
                      ...formState, 
                      password: event.currentTarget?.value || ''
                    })
                  }}
                
                  type="password" className="form-control" id="passwordInput" />
            </div>
            <Box width="100%" borderType="none" backgroundColor="transparent">
              <Button type="submit" generic> 
                  <ButtonContent>
                    Entrar
                  </ButtonContent>
              </Button>
            </Box>

        </form>

      </Box>  
    
      <Button primary> 
        <ButtonContent>
          Login
        </ButtonContent>        
      </Button>

      <Box height="303px" width="345px" backgroundColor="transparent" borderType="none">
        <Title>Sistema Controle de Recursos </Title>
      </Box>

      
      
    </div>
  )
}

export default App
