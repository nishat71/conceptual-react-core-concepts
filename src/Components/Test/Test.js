import React from 'react';
import Test2 from '../Test2/Test2';
import './Test.css'

const Test = ({name}) => {
// const Test = (props) => {
//    const {name} = props;
    return (
        <div>
            <h2>Hello Test</h2>
            <Test2 name={name}/> 
            {/* distructuring kore abr patay disi */}
        </div>
    );
};

export default Test;
/* parent er kuno data Test er modde prothome gese but ai Test er modde kuno kaj e lagbe na
Test er modde arekta component ase Test2 sekane kaj e lagbe

ekane j data ashse seta Test2 te drker, ekane drker nei
distructuring kore abr patay disi Test 2 te
Test 2 te giye abr receive krte pari
 */