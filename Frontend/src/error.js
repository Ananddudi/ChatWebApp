import {Link} from 'react-router-dom';
function Error(message){
    const error = "message"
    return (
        <div>{error}
            <Link to="/">
                <button type='button'>Back to home</button>
            </Link>
        </div>
        );
}


export default Error;
