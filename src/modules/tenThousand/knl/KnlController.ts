import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("knl")
export default class KnlController {
  @operation({
    summary: "Get Knl",
  })
  @get()
  static getKnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knl",
  })
  @post("{id}")
  static createKnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
