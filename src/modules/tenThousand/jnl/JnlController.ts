import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jnl")
export default class JnlController {
  @operation({
    summary: "Get Jnl",
  })
  @get()
  static getJnl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jnl",
  })
  @post("{id}")
  static createJnl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
