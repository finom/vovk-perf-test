import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("arb")
export default class ArbController {
  @operation({
    summary: "Get Arb",
  })
  @get()
  static getArb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arb",
  })
  @post("{id}")
  static createArb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
