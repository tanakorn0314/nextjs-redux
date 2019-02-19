import React from 'react';
import Link from 'next/link';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Link href='/about'>Go to about</Link>
            </div>
        )
    }
}

export default Home;