import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqvs")
export default class EqvController {
  @operation({
    summary: "Get Eqvs",
  })
  @get()
  static getEqvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqv",
  })
  @post("{id}")
  static createEqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
