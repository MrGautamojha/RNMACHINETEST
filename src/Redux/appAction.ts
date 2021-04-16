import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE, MY_ORDER} from './types';
import {postDataAxios} from '../FetchServices/FetchService';

export function updateAppState(name: string, value: any) {
  return {
    type: UPDATE_APP_STATE,
    payload: {
      name,
      value,
    },
  };
}

export function updateBulkAppState(values: any) {
  return {
    type: UPDATE_BULK_APP_STATE,
    payload: {
      values,
    },
  };
}

export function myOrder(cart: any) {
  console.log('ssssss----------------', cart);

  return async () => {
    let body = {
      categoryid: 'gautam',
    };
    console.log('llllllllllll');

    const result = await postDataAxios('MyOrder/addToMyOrder', body);
    console.log(result.success);
    return {type: MY_ORDER, payload: result};
  };
}
