import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqm")
export default class EqmController {
  @operation({
    summary: "Get Eqm",
  })
  @get()
  static getEqm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqm",
  })
  @post("{id}")
  static createEqm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
