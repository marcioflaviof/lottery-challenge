import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Option } from "../components/atoms/Dropdown/Dropdown";
import { LOTTERY_API, LOTTERY_DRAW_API, LOTTERY_RESULTS_API } from "../config/env";

type Result = {
  options: Option[];
  getResult: (lotteryId: string) => Promise<DrawingResult>;
};

type Lottery = {
  id: number;
  name: string;
};

type DrawingResult = {
  numbers: string[];
};

const request = <T>(endpoint: string): Promise<AxiosResponse<T>> => axios.get(endpoint);

const useLottery = (): Result => {
  const [options, setOptions] = useState<Option[]>([]);

  const getLotteries = async () => {
    return request<Array<{ id: number; nome: string }>>(LOTTERY_API).then((result) => {
      return result.data.map((payload) => {
        return {
          id: payload.id,
          name: payload.nome,
        } as Lottery;
      });
    });
  };

  useEffect(() => {
    const lotteries = async () =>
      await getLotteries()
        .then((lotteries) => {
          return lotteries.map((lottery) => {
            return {
              id: lottery.id,
              text: lottery.name.toUpperCase(),
            } as Option;
          });
        })
        .then((option) => setOptions(option));

    void lotteries();
  }, []);

  const getResult = async (lotteryId: string) => {
    const drawingRelation = await request<Array<{ loteriaId: string; concursoId: string }>>(
      LOTTERY_DRAW_API
    )
      .then((result) => {
        return result.data.filter(
          (payload: Record<string, number | string>) => payload.loteriaId == lotteryId
        );
      })
      .then((result) => {
        return result[0];
      });

    if (drawingRelation && drawingRelation.concursoId) {
      return request<{ numeros: string[] }>(
        `${LOTTERY_RESULTS_API}/${drawingRelation.concursoId}`
      ).then((result) => {
        return { numbers: result.data.numeros } as DrawingResult;
      });
    }

    return Promise.resolve({ numbers: [] });
  };

  return {
    options,
    getResult,
  };
};

export default useLottery;
