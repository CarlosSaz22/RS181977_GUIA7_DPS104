import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'


export default function Cats(){

const list = [
  {
    name: 'Abisinio',
    avatar_url: 'https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_111934933-1024x816.jpg',
    subtitle: 'Etiopía'
  },
  {
    name: 'Angora turco',
    avatar_url: 'https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_107149821-1024x678.jpg',
    subtitle: 'Turquía'
  },
   {
    name: 'Azul ruso',
    avatar_url: 'https://www.zooplus.es/magazine/wp-content/uploads/2017/10/fotolia_112943750-1024x680.jpg',
    subtitle: 'Rusia'
  },
   {
    name: 'Gato minskin',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/6/3/8/img_836_gato-minskin_0_600.jpg',
    subtitle: 'Estados Unidos'
  },
   {
    name: 'Gato Habana',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/0/1/2/img_210_gato-habana_0_600.jpg',
    subtitle: 'Reino Unido'
  },
    {
    name: 'Ragamuffin',
    avatar_url: 'https://t1.ea.ltmcdn.com/es/razas/3/1/2/img_213_ragamuffin_0_600.jpg',
    subtitle: 'Rusia'
  },
    {
    name: 'Ashera',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/5/1/2/img_215_ashera_0_600.jpg',
    subtitle: 'Estados Unidos'
  },
    {
    name: 'Gato khao manee',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/6/0/2/img_206_gato-khao-manee_0_600.jpg',
    subtitle: 'Tailandia'
  },
    {
    name: 'Gato caracat',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/9/9/7/img_799_gato-caracat_0_600.jpg',
    subtitle: 'Rusia'
  },
    {
    name: 'Gato singapura o singapur',
    avatar_url: 'https://t2.ea.ltmcdn.com/es/razas/4/8/7/img_784_gato-singapura-o-singapur_0_600.jpg',
    subtitle: 'Singapur'
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