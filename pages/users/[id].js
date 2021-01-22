import {useRouter} from 'next/router'
import fetch from 'isomorphic-fetch'
import Container from '../../components/container';

const User = ({user}) =>{
    // console.log(props)
    const router = useRouter();
    // const obj = router.query
    // console.log(obj)
    const {id} = router.query;


    return (
        <Container>
            <div className="row">
                <div className="col-md-6 offset-md3">
                    <div className="card">
                        <div className="card-header text-center">
                            <img src={user.avatar} alt="" style={{borderRadius:'50%'}}/>

                        </div>
                        <div className="card-body">
                            <h3>
                                {user.id}. {user.firs_name} {user.last_name}
                            </h3>
                            <p>Email: {user.email}</p>

                        </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

User.getInitialProps = async (ctx) => {
    // console.log(ctx.query.id)
    const id=1;
    // const res = await fetch('https://reqres.in/api/users/' + ctx.query.id);    //son otro tipo de comillas
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)   //ojo las comillas aqui son diferentes para poder usar ${}
    // console.log(res)
    
    const resJSON = await res.json();
    // console.log(resJSON);
    return {user: resJSON.data};
    
}

export default User