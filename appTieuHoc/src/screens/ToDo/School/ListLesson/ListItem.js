import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {AccordionList} from 'accordion-collapse-react-native';
import {List} from './Data';
import {childList} from './Data';
import {useNavigation} from '@react-navigation/native';

const ListItem = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(null);
  const [select, setSelect] = useState(null);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(item.id);
          switch (select) {
            case 1:
              navigation.navigate("LuyenTap");
              break;
            // case 2:
            //   navigation.navigate();
            //   break;
            // case 3:
            //   navigation.navigate();
            //   break;
            // case 4:
            //   navigation.navigate();
            //   break;

            default:
              break;
          }
        }}
        style={styles.touch}>
        <Image resizeMode="contain" style={styles.img} source={item.img} />
        <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const head = (item, index) => {
    return (
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            paddingLeft: 44.5,
          }}>
          <View
            style={{
              width: 19,
              height: 19,
              borderRadius: 50,
              backgroundColor: '#E3EAFF',
            }}
          />

          <View
            style={{
              position: 'absolute',
              width: 8,
              height: 8,
              borderRadius: 50,
              backgroundColor: '#43DF94',
              left: 50,
            }}
          />
        </View>

        <View style={{width: '80%'}}>
          <Text style={{fontSize: 12, fontWeight: '400', color: '#2B4182'}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 13, fontWeight: '700', color: '#2B4182'}}>
            {item.sub}
          </Text>
        </View>
      </View>
    );
  };

  const body = item => {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '25%'}} />
        <FlatList
          data={childList}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={renderItem}
        />
      </View>
    );
  };
  return (
    <View>
      <AccordionList
        list={List}
        header={head}
        body={body}
        keyExtractor={item => {
          return item.id;
        }}
      />
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6D7FB3',
    padding: 5,
  },
  img: {
    height: 25,
    width: 19,
    marginRight: 5,
  },
  touch: {
    flexDirection: 'row',
  },
});
