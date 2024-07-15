import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import AntDesign from '@expo/vector-icons/AntDesign';
import SVGComponent from '@/components/SVGComponent'
console.log(SVGComponent);


export default function DeathTab() {

    return (
      <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <SVGComponent />}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="defaultSemiBold">
                Testing random stuff.
                <AntDesign name="camera" size={24} color="white" />
              </ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      );
    }



const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });

  // test//