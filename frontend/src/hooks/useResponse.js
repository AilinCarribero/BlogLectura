import { ToastMessage } from "../utils/toast"

export const useResponse = () => {

    const setToastResponse = (res, mensajeResOk) => {
        console.log(res)

        if(res.status === 200) {
            if(res.data.error) {
                ToastMessage('error', res.data.message)

                return 'error';
            } else {
                ToastMessage('success', mensajeResOk);

                return 'ok';
            }
        }
    }

    return { setToastResponse } 
}