# react-native-carousel-kingth
this is simple carousel for react-native users

# Preview
|                             IOS                              | Android |
| :----------------------------------------------------------: | :-----: |
|<img width="200px" src="https://user-images.githubusercontent.com/58502653/128170351-ccae9e94-1bcd-476e-8e3f-de4d57265979.gif"/> |!<img width="200px" src="https://user-images.githubusercontent.com/58502653/128170304-c071210f-2470-4380-ab00-90588b7f2259.gif"/> |


# Quick Start
```js
$ yarn 
$ yarn ios
$ yarn android
```
# Example
```js
// App.tsx

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

const RainbowSheetPage = ({
  item,
}: {
  item: {
    id: number;
    color: string;
  };
}) => {
  return <View style={{width: 160, height: 200, backgroundColor: item.color}} />;
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
```
