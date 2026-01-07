import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
