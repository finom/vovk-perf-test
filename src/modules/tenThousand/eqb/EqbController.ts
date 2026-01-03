import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqbs")
export default class EqbController {
  @operation({
    summary: "Get Eqbs",
  })
  @get()
  static getEqbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqb",
  })
  @post("{id}")
  static createEqb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
