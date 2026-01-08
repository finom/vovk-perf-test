import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("adj")
export default class AdjController {
  @operation({
    summary: "Get Adj",
  })
  @get()
  static getAdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adj",
  })
  @post("{id}")
  static createAdj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
