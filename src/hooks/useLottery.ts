import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { LOTTERY_API, LOTTERY_DRAW_API, LOTTERY_RESULTS_API } from "../config/env";

type LotteryResult = {
  id: number;
  text: string;
  slug: string;
};

type Result = {
  lotteries: LotteryResult[];
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
  const [lotteries, setLotteries] = useState<LotteryResult[]>([]);

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

  const dasherize = (slug: string) =>
    slug
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split(" ")
      .join("-");

  useEffect(() => {
    const lotteries = async () =>
      await getLotteries()
        .then((lotteries) => {
          return lotteries.map((lottery) => {
            return {
              id: lottery.id,
              text: lottery.name.toUpperCase(),
              slug: dasherize(lottery.name),
            } as LotteryResult;
          });
        })
        .then((option) => setLotteries(option));

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
    lotteries,
    getResult,
  };
};

export default useLottery;
