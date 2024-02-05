import "./App.css";
import OtpLogin from "./components/OtpLogin";

function App() {
  const handlePhoneNumber = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <OtpLogin />
    </>
  );
}

export default App;
