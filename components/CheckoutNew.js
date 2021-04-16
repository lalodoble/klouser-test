
import {useState} from "react";
import axios from 'axios'
import { API_URL } from '../utils/urls'

axios.defaults.headers.post['Content-Type'] = 'application/json';

const cbInstance = Chargebee.init({
    site: "klouser-test"
});

export default function CheckoutNew(props) {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(0);

    const handleCheckout = () => {
        setLoading(true)

        let data = {
            plan_id: props.plan_id,
            coupon_id: props.coupon_id
        }

        cbInstance.openCheckout({
            hostedPage: () => {
                return axios.post(`${API_URL}/subscribers/checkout-page`, data).then((response) => response.data)
            },
            success(hostedPageId){
                console.log(hostedPageId);
            },
            close:() => {
                setLoading(false);
                console.log("checkout new closed");
            },
            step(step) {
                console.log("checkout", step);
            }
        });
    }

    handleCheckout()

    return (
        <div id="container" className="checkout container">
            {loading && <span>Procesando....</span>}
        </div>
    )

}
