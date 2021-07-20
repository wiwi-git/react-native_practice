import React, { useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  Text, View, Dimensions
} from 'react-native';
import SwitchToggle from './SwitchToggle';
import Toast from 'react-native-easy-toast';

const App = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();  
  const [toggle, setToggle] = useState({});

  const handleToggle = (name, value) => {
    setToggle({ ...toggle, [name]: !value });

    if (name === 'aleam') {
      if (toggle.aleam) {
        toastRef.current.show('2021.02.02 앱 알림 수신을 거부하였습니다.');
      } else {
        toastRef.current.show('2021.02.02 앱 알림 수신을 동의하였습니다.');
      }
    }
  };

  return (
    <View>
      <SwitchToggle isOn={toggle.aleam} onToggle={() => handleToggle('aleam', toggle.aleam)} />
      <Toast ref={toastRef}
             positionValue={windowHeight * 0.55}
             fadeInDuration={200}
             fadeOutDuration={1000}
             style={{backgroundColor:'rgba(33, 87, 243, 0.5)'}}
      />
    </View>
  )
}

export default App
