import axios from "axios";
import { useEffect, useState } from "react";
import { Option } from "../components/atoms/Dropdown/Dropdown";

type Result = {
  options: Option[];
  results: string[];
  onOptionChange: (selectedOption: string) => Promise<void>;
};

type Lottery = {
  id: number;
  name: string;
};

type DrawingResult = {
  numbers: string[];
};

const useLottery = (): Result => {
  const [options, setOptions] = useState<Option[]>([]);
  const [results, setResults] = useState<string[]>([]);

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

  const onOptionChange = async (selectedOption: string) => {
    const result = await getResult(selectedOption);

    setResults(result.numbers);
  };

  return {
    options,
    results,
    onOptionChange,
  };
};

export default useLottery;
