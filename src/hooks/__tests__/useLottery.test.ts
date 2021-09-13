import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import HttpAdapter from "axios/lib/adapters/http";
import nock from "nock";
import { act } from "react-dom/test-utils";
import useLottery from "../useLottery";

axios.defaults.adapter = HttpAdapter;

describe("useLottery", () => {
  const options = [
    { id: "0", nome: "mega-sena" },
    { id: "1", nome: "quina" },
  ];

  const drawIds = [
    {
      loteriaId: 0,
      concursoId: "2359",
    },
    {
      loteriaId: 1,
      concursoId: "5534",
    },
  ];

  const lotteryNumbers = { numeros: ["31", "32", "39", "42", "43", "51"] };

  afterEach(cleanup);

  describe("#run", () => {
    const lotteryMock = nock("https://brainn-api-loterias.herokuapp.com/api/v1");

    beforeEach(() => {
      lotteryMock.persist().get("/loterias").reply(200, options);
      lotteryMock.persist().get("/loterias-concursos").reply(200, drawIds);
      lotteryMock.persist().get("/concursos/2359").reply(200, lotteryNumbers);
    });

    it("should check options", async () => {
      const { result, waitFor } = renderHook(() => useLottery());

      await waitFor(() => {
        result.current.lotteries;
        void result.current.getResult("0");

        expect(result.current.lotteries.length).toEqual(2);
      });
    });

    it("check lotteryNumbers", async () => {
      const { result } = renderHook(() => useLottery());

      await act(async () => {
        result.current.lotteries;
        const results = await result.current.getResult("0");

        expect(results.numbers).toEqual(lotteryNumbers.numeros);
      });
    });
  });
});
