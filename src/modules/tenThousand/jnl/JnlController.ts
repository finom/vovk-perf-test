import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnls")
export default class JnlController {
  @operation({
    summary: "Get Jnls",
  })
  @get()
  static getJnls = procedure({
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
