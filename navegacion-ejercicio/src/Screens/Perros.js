import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
export default function Dogs(){
  const list = [
  {
    name: 'Perro de Groenlandia',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/9/8/6/img_689_perro-de-groenlandia_0_600.jpg',
    subtitle: 'Groenlandia'
  },
  {
    name: 'Pastor alemán',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/1/1/1/img_111_pastor-aleman_0_600.jpg',
    subtitle: 'Alemania'
  },
   {
    name: 'Boykin spaniel',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/5/9/6/img_695_boykin-spaniel_0_600.jpg',
    subtitle: 'Estados Unidos'
  },
   {
    name: 'Shiba Inu',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/4/5/0/img_54_shiba-inu_1_600.jpg',
    subtitle: 'Japón'
  },
   {
    name: 'Caniche o poodle enano',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/8/3/0/img_38_caniche-o-poodle-enano_0_600.jpg',
    subtitle: 'Francia'
  },
    {
    name: 'Mastín español',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/4/7/1/img_174_mastin-espanol_0_600.jpg',
    subtitle: 'España'
  },
    {
    name: 'Basenji',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/1/4/0/img_41_basenji_0_600.jpg',
    subtitle: 'Reino Unido'
  },
    {
    name: 'Pit bull terrier americano',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/0/7/0/img_70_pit-bull-terrier-americano_0_600.jpg',
    subtitle: 'Estados Unidos'
  },
    {
    name: 'Shar pei',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/9/5/0/img_59_shar-pei_0_600.jpg',
    subtitle: 'China'
  },
    {
    name: 'Pastor de Brie',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/3/4/1/img_143_pastor-de-brie_0_600.jpg',
    subtitle: 'Francia'
  },

]
  return(
    <ScrollView >
    <View>
     {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
    </View>
     </ScrollView >
      );
}