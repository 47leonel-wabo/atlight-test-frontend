import {notification} from "antd";

// const [api] = notification.useNotification();

class AppNotification {
    successOperation = (message, description) => {
        notification.success({
            message,
            placement: "topRight",
            description,
        });
    };

    errorOperation = (message, description) => {
        notification.error({
            message,
            description,
            placement: "topRight",
        });
    };
}

export default new AppNotification();
