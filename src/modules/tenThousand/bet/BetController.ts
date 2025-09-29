import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bets")
export default class BetController {
  @operation({
    summary: "Get Bets",
  })
  @get()
  static getBets = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bet",
  })
  @post("{id}")
  static createBet = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
