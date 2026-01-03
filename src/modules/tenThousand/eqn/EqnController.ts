import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqns")
export default class EqnController {
  @operation({
    summary: "Get Eqns",
  })
  @get()
  static getEqns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqn",
  })
  @post("{id}")
  static createEqn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
