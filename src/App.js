import './App.css';
import Routers from "./routes/Routers";
import { Toaster } from 'react-hot-toast';
import axios from "axios";
function App() {
axios.defaults.baseURL = "https://influencer-server-jisan901.vercel.app/api/v1/"
  return (
        <div className="max-w-[1400px] mx-auto">
            <Routers/>
            <Toaster />
        </div>
  );
}

export default App;
