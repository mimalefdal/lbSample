import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {Button, Icon, Row} from 'native-base';

const App = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.topArea}>
        <View style={styles.scoreboard}>
          <Row
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={require('./assets/icons/man.png')}
              style={styles.playeravatar}
            />
            <Text style={styles.playername}>Farid</Text>
          </Row>
          <Row
            style={{
              flex: 2,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Image
              source={require('./assets/icons/diamond.png')}
              style={styles.pointsicon}
            />
            <Text style={styles.scoreItem}>1</Text>
            <Image
              source={require('./assets/icons/medal.png')}
              style={styles.pointsicon}
            />
            <Text style={styles.scoreItem}>2</Text>
          </Row>
          <Row
            style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end'}}>
            <Image
              source={require('./assets/icons/giftbox.png')}
              style={styles.pointsicon}
            />
          </Row>
        </View>
      </View>

      <View style={{flex: 2, alignSelf: 'stretch'}}>
        <Button block rounded style={styles.button}>
          <Text style={styles.buttonTextLight}>شروع بازی</Text>
        </Button>
      </View>

      <View
        style={{
          flex: 1,
          alignSelf: 'stretch',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Button transparent>
          <Icon name="settings" style={{color: 'white'}} />
        </Button>
        <Button transparent>
          <Icon name="lock" style={{color: 'white'}} />
        </Button>
        <Button transparent>
          <Icon name="text" style={{color: 'white'}} />
        </Button>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'navy',
    padding: 30,
  },
  topArea: {flex: 5, justifyContent: 'flex-start', alignSelf: 'stretch'},
  button: {
    paddingHorizontal: 40,
    backgroundColor: 'green',
  },
  buttonTextLight: {
    color: 'yellow',
  },
  scoreboard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'green',
    color: 'white',
    height: 55,
    borderRadius: 20,
    padding: 20,
  },
  playeravatar: {width: 40, height: 40, marginRight: 5},

  playername: {color: 'white', fontSize: 18},
  pointsicon: {width: 30, height: 30},
  scoreItem: {
    color: 'white',
    marginRight: 8,
  },
});
