import Navigation from '../components/navigation'
import Head from 'next/head'
const Container = (props) => (

    <div>
         <Head>
                <title>Next.js Proyect</title>
                <link rel="stylesheet" 
                href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css" />
        </Head>
        <Navigation/>
        <div className="container p-4">
            {props.children}
        </div>


    </div>


)

export default Container