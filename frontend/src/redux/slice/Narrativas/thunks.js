import { getApiNarrativas } from "../../../services/apiNarrativa";
import { setNarrativas } from "./narrativaSlice";

export const getNarrativas = () => (dispatch) => {
    getApiNarrativas().then( res => {
        dispatch(setNarrativas(res.data));
    }).catch( err => {
        console.error(err)
    })
}