import { View, Text, ScrollView } from 'react-native'
import CateItem from '../components/CateItem'

const DATA = [
    {
        src: require('../assets/houses.png'),
        tit: 'Houses'
    },
    {
        src: require('../assets/apartment.png'),
        tit: 'Apartments'
    },
    {
        src: require('../assets/condos.png'),
        tit: 'Condos'
    },
    {
        src: require('../assets/land.png'),
        tit: 'Land'
    },
    {
        src: require('../assets/building.png'),
        tit: 'Buildings'
    },
    {
        src: require('../assets/townhouses.png'),
        tit: 'Town Houses'
    },
]
const Categories = () => {
  return (
    <View style={{flex: 1, width: '100%', marginTop: 44}}>
        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 700}}>Categories</Text>
      <ScrollView>
        <View style={{gap: 12, paddingHorizontal: 12, marginVertical: 14}}>
            {DATA.map((item, ind) => 
                <CateItem item = {item} />)}
        </View>
      </ScrollView>
    </View>
  )
}

export default Categories