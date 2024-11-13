import { Card } from "@material-tailwind/react";
import MyCardHeader from "@components/Login/MyCardHeader";
import Form from "@components/Login/Form";
import Notification from "@components/Notifications/Notification";
import { useState } from "react";

const Login = () => {
  const [notification, setNotifications] = useState(null);

  function handleNotification(type, message, description) {
    setNotifications({
      type,
      message,
      description,
    });

    setTimeout(() => {
      setNotifications(null);
    }, 2000);
  }

  return (
    <>
      <Card
        shadow={false}
        className="md:px-24 md:py-14 py-8 border border-gray-300 h-[100vh] justify-center"
      >
        {notification && (
          <Notification
            type={notification.type}
            message={notification.message}
            description={notification.description}
          />
        )}
        <MyCardHeader />
        <Form onNotification={handleNotification} />
      </Card>
    </>
  );
};

export default Login;
