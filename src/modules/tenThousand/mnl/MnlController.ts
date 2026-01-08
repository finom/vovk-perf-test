import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mnl")
export default class MnlController {
  @operation({
    summary: "Get Mnl",
  })
  @get()
  static getMnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mnl",
  })
  @post("{id}")
  static createMnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
