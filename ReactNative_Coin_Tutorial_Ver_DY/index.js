/**
 * https://jeffgukang.github.io/react-native-tutorial/docs/sample-apps/coininfo-list/
 * 를 hooks 형태로 만들어보았다
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
