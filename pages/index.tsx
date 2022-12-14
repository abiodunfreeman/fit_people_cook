//@ts-nocheck
import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../components/nav';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
declare var process: {
  env: {
    NEXT_PUBLIC_X_APP_KEY: string;
    NEXT_PUBLIC_X_APP_ID: string;
  };
};
const Home: NextPage = () => {
  const [data, setData] = useState(false);
  const getNutritionData = async (string: String, setFunction: Function) => {
    const config = {
      headers: {
        'x-app-key': `${process.env.NEXT_PUBLIC_X_APP_KEY}`,
        'x-remote-user-id': '0',
        'x-app-id': `${process.env.NEXT_PUBLIC_X_APP_ID}`,
      },
    };
    const res = await axios.post(
      'https://trackapi.nutritionix.com/v2/natural/nutrients',
      { query: string },
      config
    );
    if (res && res.data && res.data.foods) {
      console.log(res.data.foods);
      const mappedData = res.data.foods.map(food => {
        return {
          name: food.food_name,
          calories: food.nf_calories,
          protein: food.nf_protein,
          carbs: food.nf_total_carbohydrate,
          fat: food.nf_total_fat,
          sodium: food.nf_sodium,
          photo_url: food.photo.highres,
        };
      });
      const jsx = mappedData.map(food => {
        return (
          <div key={food.name} className="bg-white border p-4">
            <h1 className="font-bold text-center text-4xl">{food.name}</h1>
            <ul className="text-center">
              <li>Calories: {food.calories}</li>
              <li>Protein: {food.protein}</li>
              <li>Carbs: {food.carbs}</li>
              <li>Fat: {food.fat}</li>
              <li>Sodium: {food.sodium}</li>
            </ul>
            {food.photo_url != null && (
              <div className="border border-black flex justify-center max-h-64">
                <Image src={food.photo_url} height={'50px'} width={'50px'} />
              </div>
            )}
          </div>
        );
      });
      setFunction(jsx);
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div>
      <Head>
        <title>Fit People Cook</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-red-500 min-h-screen w-screen">
        <Nav />
        <h1 className="text-center text-3xl font-extrabold">Fit People Cook</h1>
        <div className="bg-white w-full flex justify-center p-4">
          <TextField
            placeholder="enter what you ate"
            sx={{ width: '500px' }}
            id="food-query"
          />
          <Button
            onClick={() =>
              getNutritionData(
                document.getElementById('food-query').value,
                setData
              )
            }
          >
            Get Data
          </Button>
        </div>
        <div className="border border-black  flex justify-center m-4 gap-4 flex-wrap">
          {data}
        </div>
      </main>
    </div>
  );
};

export default Home;
