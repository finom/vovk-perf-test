import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqos")
export default class EqoController {
  @operation({
    summary: "Get Eqos",
  })
  @get()
  static getEqos = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqo",
  })
  @post("{id}")
  static createEqo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
