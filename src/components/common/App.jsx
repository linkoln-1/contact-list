import Auth from "../Auth";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Contacts from "../Contacts";

function App() {
  const token = useSelector((state) => state.logins.user.token);
  console.log(token);

  return (
    <div className="container h-100">
      <Routes>
        {token ? (
          <Route path="/contact" element={<Contacts />} />
        ) : (
          <>
            <Route path={"/"} element={<Auth />} />
            <Route path={"*"} element={<Navigate to={"/"} replace />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
