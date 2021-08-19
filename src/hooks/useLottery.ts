import axios from "axios";

type Result = {
  getLotteries: () => Promise<Lottery[]>;
  getResult: (lotteryId: string) => Promise<DrawingResult>;
};

type Lottery = {
  id: number;
  name: string;
};

type DrawingResult = {
  numbers: string[];
};

const useLottery = (): Result => {
  const getLotteries = async () => {
    return axios
      .get<Array<{ id: number; nome: string }>>(
        "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
      )
      .then((result) => {
        return result.data.map((payload) => {
          return {
            id: payload.id,
            name: payload.nome,
          } as Lottery;
        });
      });
  };

  const getResult = async (lotteryId: string) => {
    const drawingRelation = await axios
      .get<Array<{ loteriaId: string; concursoId: string }>>(
        "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
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
      return axios
        .get<{ numeros: string[] }>(
          `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${drawingRelation.concursoId}`
        )
        .then((result) => {
          return { numbers: result.data.numeros } as DrawingResult;
        });
    }

    return Promise.resolve({ numbers: [] });
  };

  return {
    getLotteries,
    getResult,
  };
};

export default useLottery;
