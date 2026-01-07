import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqh")
export default class EqhController {
  @operation({
    summary: "Get Eqh",
  })
  @get()
  static getEqh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqh",
  })
  @post("{id}")
  static createEqh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
