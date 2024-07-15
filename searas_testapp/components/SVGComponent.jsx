import { SvgUri } from 'react-native-svg';
import { StyleSheet, Image, Platform } from 'react-native';
import { View } from 'react-native';

const SVGComponent = () => {
    console.log('Rendering SVGComponent');
        return (
            <Image
            source={require('../assets/images/logo512.svg')}
            style={styles.headerImage}/>
        );
    }
    const styles = StyleSheet.create({
        headerImage: {
            height: 178,
            width: 290,
            bottom: 0,
            left: 0,
            position: 'absolute',
          },
    });

    export default SVGComponent;