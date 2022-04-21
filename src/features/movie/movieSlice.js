import {createSlice} from'@reduxjs/toolkit'

const initialState={
   recommend:null,
   newdisney:null,
   originals:null,
   trending:null, 
}
const movieSlice=createSlice({
    name:"movie",
    initialState,
    reducers:{
        setMovies:(state, action)=>{
            state.recommend=action.payload.recommend;
            state.newdisney=action.payload.newdisney;
            state.originals=action.payload.originals;
            state.trending=action.payload.trending;
        }
    }
})

export const {setMovies}=movieSlice.actions;

export const selectRecommend=state=>state.movie.recommend;
export const selectNewDisney=state=>state.movie.newdisney;
export const selectOriginals=state=>state.movie.originals;
export const selectTrending=state=>state.movie.trending;

export default movieSlice.reducer;