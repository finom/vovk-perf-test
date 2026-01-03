import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jnds")
export default class JndController {
  @operation({
    summary: "Get Jnds",
  })
  @get()
  static getJnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jnd",
  })
  @post("{id}")
  static createJnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
