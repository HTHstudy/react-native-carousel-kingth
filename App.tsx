import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Carousel from './src/Carousel';

const App = () => {
  const [page, setPage] = useState(0);
  return (
    <SafeAreaView style={{marginTop: 80}}>
      <Carousel
        page={page}
        setPage={setPage}
        gap={16}
        data={RainbowSheet}
        pageWidth={160}
        RenderItem={RainbowSheetPage}
      />
    </SafeAreaView>
  );
};

export default App;

const RainbowSheetPage = ({
  gap,
  item,
}: {
  gap: number;
  item: {
    id: number;
    color: string;
  };
}) => {
  return (
    <View style={{marginHorizontal: gap / 2}}>
      <View style={{width: 160, height: 200, backgroundColor: item.color}} />
    </View>
  );
};

const RainbowSheet = [
  {id: 0, color: 'red'},
  {id: 1, color: 'orange'},
  {id: 2, color: 'yellow'},
  {id: 3, color: 'green'},
  {id: 4, color: 'blue'},
  {id: 5, color: 'navy'},
  {id: 6, color: 'purple'},
];
