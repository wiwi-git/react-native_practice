import React from 'react';
import { NativeModules, Button } from 'react-native';

const NewModuleButton = () => {
    const { CalendarModule } = NativeModules;
    const { DEFAULT_EVENT_NAME } = CalendarModule.getConstants();

    const onPress = () => {
        console.log('onPress...', DEFAULT_EVENT_NAME);
        CalendarModule.createCalendarEvent('testName', 'testLocation',
            (error, eventId) => {
                if (error) console.log(`Error found! ${error}`);
                console.log(`event id ${eventId} returend`);
            }
        );
    };

    const onSubmit = async () => {
        console.log('onPress...', DEFAULT_EVENT_NAME);
        try {
            const eventId = await CalendarModule.createCalendarEvent(
                'Party',
                'My House'
            );
            console.log(`event id ${eventId}`);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Button
            title="Click to invoke your native module!"
            color="#841584"
            onPress={onSubmit}
        />
    );
};

export default NewModuleButton;