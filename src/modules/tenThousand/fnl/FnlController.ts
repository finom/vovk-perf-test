import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fnl")
export default class FnlController {
  @operation({
    summary: "Get Fnl",
  })
  @get()
  static getFnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fnl",
  })
  @post("{id}")
  static createFnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
