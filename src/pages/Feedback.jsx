import MyNavbar from "@components/Navbar/MyNavbar";
import NavList from "@components/Navbar/NavList";
import Form from "@components/Feedback/Form";
import { AuthProvider } from "@contexts/AuthContext";

export function Feedback() {
  return (
    <>
      <AuthProvider>
        <MyNavbar>
          <NavList active={"feedback"} />
        </MyNavbar>
      </AuthProvider>
      <Form />
    </>
  );
}

export default Feedback;
