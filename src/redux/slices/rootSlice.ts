import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: "root",
  initialState: {
    name: "Superman",
    description: "regular everyday normal mofo",
    height: 3.00,
    super_power: "tech",
    flight_time: "approx. 20 mins",
    max_speed: "10 kmph",
    comics_appeared_in: 13,
    weight: "100 kg",
    series: " Second ever"
  },
  reducers: {
    chooseName: (state, action) => { state.name = action.payload },
    chooseDescription: (state, action) => { state.description = action.payload },
    chooseHeight: (state, action) => { state.height = action.payload },
    chooseSuperPower: (state, action) => { state.super_power = action.payload },
    chooseFlightTime: (state, action) => { state.flight_time = action.payload },
    chooseMaxSpeed: (state, action) => { state.max_speed = action.payload },
    chooseComicsAppearedIn: (state, action) => { state.comics_appeared_in = action.payload },
    chooseWeight: (state, action) => { state.weight = action.payload },
    chooseSeries: (state, action) => { state.series = action.payload },
  }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const {
  chooseName,
  chooseDescription,
  chooseHeight,
  chooseSuperPower,
  chooseFlightTime,
  chooseMaxSpeed,
  chooseComicsAppearedIn,
  chooseWeight,
  chooseSeries,
} = rootSlice.actions;