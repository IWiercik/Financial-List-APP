import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';
import { apiSlice } from 'redux/api/apiSlice';

const walletsAdapter = createEntityAdapter({});

const initialState = walletsAdapter.getInitialState();

export const walletsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWallets: builder.query({
      query: () => '/wallets',
      validateStatus: (response, result) => {
        return (response.status = 200 && !result.isError);
      },
      keepUnusedDataFor: 5,
      transformResponse: (responseData) => {
        const loadedWallets = responseData.map((wallet) => {
          wallet.id = wallet._id;
          return wallet;
        });
        return walletsAdapter.setAll(initialState, loadedWallets);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [{ type: 'Wallet', id: 'LIST' }, ...result.ids.map((id) => ({ type: 'Wallet', id }))];
        } else return [{ type: 'Wallet', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetWalletsQuery } = walletsApiSlice;

export const selectWalletsResult = walletsApiSlice.endpoints.getWallets.select();
//memoized selector
const selectWalletsData = createSelector(
  selectWalletsResult,
  (walletsResult) => walletsResult.data // normalized state object with ids & entites
);

export const {
  selectAll: selectAllWallets,
  selectById: selectWalletById,
  selectIds: selectWalletIds,
} = walletsAdapter.getSelectors((state) => selectWalletsData(state) ?? initialState);
