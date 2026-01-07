import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bet")
export default class BetController {
  @operation({
    summary: "Get Bet",
  })
  @get()
  static getBet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bet",
  })
  @post("{id}")
  static createBet = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
