import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
  chooseName,
  chooseDescription,
  chooseHeight,
  chooseSuperPower,
  chooseFlightTime,
  chooseMaxSpeed,
  chooseComicsAppearedIn,
  chooseWeight,
  chooseSeries,
} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface MarvelFormProps {
  id?: string;
  data?: {}
}

interface MarvelState {
  name: string;
  description: string;
  height: number;
  super_power: string;
  flight_time: string;
  max_speed: string;
  comics_appeared_in: number;
  weight: string;
  series: string;
}

export const MarvelForm = (props: MarvelFormProps) => {

  const dispatch = useDispatch();
  let { marvelData, getData } = useGetData();
  const store = useStore()
  const name = useSelector<MarvelState>(state => state.name)
  const description = useSelector<MarvelState>(state => state.description)
  const height = useSelector<MarvelState>(state => state.height)
  const super_power = useSelector<MarvelState>(state => state.super_power)
  const flight_time = useSelector<MarvelState>(state => state.flight_time)
  const max_speed = useSelector<MarvelState>(state => state.max_speed)
  const comics_appeared_in = useSelector<MarvelState>(state => state.comics_appeared_in)
  const weight = useSelector<MarvelState>(state => state.weight)
  const series = useSelector<MarvelState>(state => state.series)
  const { register, handleSubmit } = useForm({})

  const onSubmit = async (data: any, event: any) => {
    console.log(props.id)

    if (props.id!) {
      await server_calls.update(props.id!, data)
      window.location.reload()
      console.log(`Updated:${data} ${props.id}`)
      event.target.reset();
    } else {
      dispatch(chooseName(data.name))
      dispatch(chooseDescription(data.description))
      dispatch(chooseHeight(data.height))
      dispatch(chooseSuperPower(data.super_power))
      dispatch(chooseFlightTime(data.flight_time))
      dispatch(chooseMaxSpeed(data.max_speed))
      dispatch(chooseComicsAppearedIn(data.comics_appeared_in))
      dispatch(chooseWeight(data.weight))
      dispatch(chooseSeries(data.series))
      await server_calls.create(store.getState())
      window.location.reload()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Marvel Character Name</label>
          <Input {...register('name')} name="name" placeholder='Name' />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input {...register('description')} name="description" placeholder="Description" />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <Input {...register('height')} name="height" placeholder="Height" />
        </div>
        <div>
          <label htmlFor="super_power">Super Power</label>
          <Input {...register('super_power')} name="super_power" placeholder="Super Power" />
        </div>
        <div>
          <label htmlFor="flight_time">Flight Time</label>
          <Input {...register('flight_time')} name="flight_time" placeholder="Flight Time" />
        </div>
        <div>
          <label htmlFor="max_speed">Max Speed</label>
          <Input {...register('max_speed')} name="max_speed" placeholder="Max Speed" />
        </div>
        <div>
          <label htmlFor="comics_appeared_in">Comics Appeared In</label>
          <Input {...register('comics_appeared_in')} name="comics_appeared_in" placeholder="Comics Appeared In" />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <Input {...register('weight')} name="weight" placeholder="Weight" />
        </div>
        <div>
          <label htmlFor="series">Series</label>
          <Input {...register('series')} name="series" placeholder="Series" />
        </div>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}