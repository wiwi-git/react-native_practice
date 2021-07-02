import React, {useRef} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import { View, Button  } from 'react-native';
import BottomSheet from './BottomSheet';

export default App = () => {
   
  // To be used for the reference for the bottom sheet
  const sheetRef = useRef();

  const bottomSheet = () => {
     sheetRef.current.open();
  }

  return(
    <View style={
      { flex: 1, justifyContent: 'center', alignItems: 'center'}
    }>
       <Button onPress={() => bottomSheet()} title="Bottom Sheet" />
       <BottomSheet sheetRef={sheetRef} />
    </View>
  );
}

// export default App = () => {
//   return (
//     <View style={
//       { flex: 1, justifyContent: 'center', alignItems: 'center'}
//     }>
//       <Button title="OPEN BUTTOM SHEET" onPress={() => this.RBSheet.open()}/>
//       <RBSheet
//         ref={ref =>{
//           this.RBSheet = ref;
//         }}
//         height={300}
//         openDuration={250}
//         customStyles={{
//           container: {
//             justifyContent: 'center',
//             alignItems: 'center'
//           }
//         }}
//         >
//       </RBSheet>
//     </View>
//   );
// }