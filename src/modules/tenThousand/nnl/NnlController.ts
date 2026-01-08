import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nnl")
export default class NnlController {
  @operation({
    summary: "Get Nnl",
  })
  @get()
  static getNnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nnl",
  })
  @post("{id}")
  static createNnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
