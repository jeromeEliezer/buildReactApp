import React, {useState, useEffect, } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import { FieldError } from 'react-hook-form';
import userServices from "./service/UserServices";


export default function ProfileScreen() {
  const [label, setlabel] = useState()
  // const [myinfos, setMyinfos] = useState({});
  // const [dataToUpdate, setDataToUpdate] = useState({
  //   nom: '',
  //   prenom: '',
  //   pseudo: '',
  //   niveau: '',
  //   image: null
  // });
  // const history = useHistory();
  // const userid = localStorage.getItem("id");
  // const classes = useStyle();


  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await userServices.profile();
        setMyinfos(response.data);
      } catch (error) {

      }
    };
    getProfile();

  }, []);

  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value

    if (e.currentTarget.name === 'image') {
      const file = e.target.files[0];
      setDataToUpdate({ ...dataToUpdate, image: file });
      return;
    }
    setDataToUpdate({ ...dataToUpdate, [name]: value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();

    if (dataToUpdate.image) {
      form.append('image', dataToUpdate.image);
    }

    //sert à filtrer les données qui ne sont pas vides
    const filterdDatas = { ...dataToUpdate };
    for (let attribute in filterdDatas) {
      if (!filterdDatas[attribute]) {
        delete filterdDatas[attribute]
      }
    }

    delete filterdDatas.image;

    form.append('data', JSON.stringify(filterdDatas))

    const result = await userServices.putProfile(form);

    if (result.status === 200) {
      setMyinfos(result.data)
    }
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: '700' }}>Profile Screen</Text>
      <Text>En construction</Text>
      <View>
          <TextInput autoFocus/>
          <Button title='modifier' onPress=''/>
          <Button/>
      </View>
      <View>
              <View className='avatar'>
                
                <TextInput
                  hidden
                  type='file'
                  name="image"
                  id='avatar-selector'
                  placeholder="image"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
                <label htmlFor='avatar-selector'>
                  
                  Changer d'avatar
                </label>
              </View>
            </View>
            <View>
              <Text>Votre nom actuel: </Text>
              <TextInput
                id="outlined-basic"
                label="nom"
                name='nom'
                variant="outlined"
                onChange={handleChange} />
            </View>
            <View>
              <h3>Votre prénom actuel: </h3>
              <TextInput
                id="outlined-basic"
                name='prenom'
                label="prenom"
                variant="outlined"
                onChange={handleChange}
              />
            </View>
            <View>
              <Text>Votre pseudo actuel: </Text>
              <TextInput
                id="outlined-basic"
                name='pseudo'
                label="pseudo"
                variant="outlined"
                onChange={handleChange}
              />
            </View>
            <View>
              <Text>Votre niveau actuel: </Text>
              <TextInput
                id="outlined-basic"
                name='niveau'
                label="niveau"
                variant="outlined"
                onChange={handleChange}
              />
            </View>
            <Button title='modifier' variant="outlined" style={{backgroundColor: '#1C93E9', color: '#FFFFFF'}} type='submit'/>
            
           

    </View>
  );
}