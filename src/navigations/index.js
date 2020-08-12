import { NavigationContainer } from '@react-navigation/native';

//import tabstack
import TabStack from './tabStack';


export default function Nav() {
    return(
        <NavigationContainer>
            <TabStack/>
        </NavigationContainer>
    );
};