import React, {Component} from 'react';
export const MyContext = React.createContext();

    class index extends Component {
        constructor() {
            super();
            this.state = {
                books:[],
                currentlyReading:[],
                wantToRead:[],
                read:[]
            }
        }


        render() {
            return (<h1></h1>)
        }
    }

export default index;
