import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
    name: "fetchStatus",
    initialState:{
      fetchDone:false,// ' pending and done
      currentlyFetching:false,  
    },
    reducers: {
      markFetchDone: (state) => {
         state.fetchDone=true;
         return;
      },
      markFetchingStarted: (state) => {
        state.currentlyFetching=true;
        return;
      },
      markFetchingFinished: (state) => {
         state.currentlyFetching=false;
         return;
      }
    }
  });
  export const fetchStatusActions = fetchStatusSlice.actions;
  export default fetchStatusSlice;
  