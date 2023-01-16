import { Button } from "./components/Button"
import './App.css';
import { Title } from "./components/Title";
import { Box } from "./components/Box";

function App() {
  return (
    <div>
      <Button text="Login" primary/>

      <Box height="303px" width="345px" backgroundColor="transparent" borderType="none">
        <Title>Sistema Controle de Recursos </Title>
      </Box>
      
    </div>
  )
}

export default App
