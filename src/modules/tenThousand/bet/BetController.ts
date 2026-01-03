import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bets")
export default class BetController {
  @operation({
    summary: "Get Bets",
  })
  @get()
  static getBets = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bet",
  })
  @post("{id}")
  static createBet = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
