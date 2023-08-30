import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import HomePage from "./HomePage";
import LoginForm from "./LoginForm";
import ShowTrains from "./ShowTrains";
import AdminPage from './AdminPage'


export default function RouterPath() {

    const element =

        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/Login" element={<LoginForm />} />
                <Route path="/RegistrationForm" element={<RegistrationForm />}></Route>
                <Route path="/ShowTrains" element={<ShowTrains />}></Route>
                <Route path="/AdminPage" element={<AdminPage />}></Route>

            </Routes>
        </>

    return element;

}
