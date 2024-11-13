import MyNavbar from "@components/Navbar/MyNavbar";
import NavList from "@components/Navbar/NavList";
import Form from "@components/Feedback/Form";

export function Feedback() {
  return (
    <>
      <MyNavbar>
        <NavList active={"feedback"} />
      </MyNavbar>
      <Form />
    </>
  );
}

export default Feedback;
