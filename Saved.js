import * as React from 'react';
import { View, Text } from "react-native";



export default function SavedScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:16,fontWeight:'700'}}>Saved Screen</Text>
        
            <Text>En construction</Text>

            {/* <View >
                <View>
                    <View>
                        <Text style={{ textAlign: 'center' }} >Tous les Événements</Text>
                        {events.map((event, index) => (
                            <Card.Divider

                                key={index}
                                
                            >
                                <CardHeader
                                    avatar={<Avatar src={`data:image/png;base64,${event.organizer?.image}`} />}
                                    title={event.user?.pseudo}
                                   
                                />
                                <CardContent classes={classes.CardContent}>
                                    <Text>{event.ville}</Text>
                                    <Text>{event.pratique}</Text>
                                    <Text>{convertToFrenchDate(event.date)}</Text>
                                    <Text>{event.heure}</Text>
                                    <TouchableOpacity
                                        onPress ={handleSubscribe}
                                        className={classes.Button}
                                        data-event = {event.id}
                                    >
                                        Participer
                                    </TouchableOpacity>
                                </CardContent>
                            </Card.Divider>
                        ))}
                    </View>
                </View>
            </View>
            <Alert 
                open = {alertState.open}
                onClose = {handleCloseAlert}
                severity = {alertState.severity}
                message = {alertState.message}
            />
         */}
      </View>
    );
  
    }
