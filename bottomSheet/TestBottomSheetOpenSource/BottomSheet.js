import React, {useRef} from 'react';
import RBSheet from "react-native-raw-bottom-sheet"
import { View } from "react-native"

const BottomSheet = ({ sheetRef }) => {
    
    return(
        <RBSheet ref={sheetRef} 
            customStyles={{mask: { backgroundColor: "black" }, container: { elevation: 100 }}}>
            <View style={{
                backgroundColor:'green',
                flex:1
            }}>
            </View>
        </RBSheet>
    );
}

export default BottomSheet;