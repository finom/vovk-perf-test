import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

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
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
