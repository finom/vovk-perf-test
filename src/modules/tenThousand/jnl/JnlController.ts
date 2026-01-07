import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnl")
export default class JnlController {
  @operation({
    summary: "Get Jnl",
  })
  @get()
  static getJnl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnl",
  })
  @post("{id}")
  static createJnl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
