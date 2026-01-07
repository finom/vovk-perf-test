import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqo")
export default class EqoController {
  @operation({
    summary: "Get Eqo",
  })
  @get()
  static getEqo = procedure({
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
