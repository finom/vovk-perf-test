import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqns")
export default class JqnController {
  @operation({
    summary: "Get Jqns",
  })
  @get()
  static getJqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jqn",
  })
  @post("{id}")
  static createJqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
