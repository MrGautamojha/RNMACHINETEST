//@ts-ignore
// import {create, PREDEF_RES} from 'react-native-pixel-perfect';

// const scaler = create(PREDEF_RES.iphoneX.dp);

// export default scaler;

import {create, PREDEF_RES} from 'react-native-pixel-perfect';
const perfectSize = create(PREDEF_RES.iphone6s.px);

const scaler = (size: any) => perfectSize(size);

export default scaler;
