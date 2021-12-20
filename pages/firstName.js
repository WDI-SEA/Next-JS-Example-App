import axios from 'axios'

export default function firstName(props) {
    let firstNameVal = props.callRes.firstName

    return (
        <h1>
            Hello! My first name is {firstNameVal}. 
        </h1>
    )
}

export async function getServerSideProps(context) {
    console.log("Url Params: ", context)

    let callRes = await axios.get("http://localhost:3001/api/firstName").then(res => res.data).catch(err => err)

    return {
        props: {
            callRes
        }
    }

}