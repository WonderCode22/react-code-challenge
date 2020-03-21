import React from 'react';
import Card from '../Card/Card';

const Container = ({data}) => {
    console.log(data)
    if(data.length > 0){
        console.log(data)
        let filtered_data = data.filter(row => row.releaseYear >= 2010).sort((a, b) => a.title-b.title).slice(1, 21);
        let result = filtered_data.map((row, i) => {
            return(
                <div key={i}>
                    <Card title={row.title} image={row.images['Poster Art'].url}></Card>
                </div>
            )
        })
        console.log(result)
        return result;
    }
    return null;
}

const Content = (props) => {
    if (props.info){
        // console.log(props.info)
        const { loading, data, fail } = props.info;
        return(
                <div className='content'>
                    <div className='row'>
                    { loading && <h3>Loading...</h3>}
                    <Container data={data}></Container>
                    { fail && <h3>Oops, something went wrong...</h3>}
                    </div>
                </div>
        )
    }
    else{
        return(
            <div className='content'>
                {props.children}
            </div>
        )
    }
    
}

export default Content;