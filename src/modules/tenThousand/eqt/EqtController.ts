import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqts")
export default class EqtController {
  @operation({
    summary: "Get Eqts",
  })
  @get()
  static getEqts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqt",
  })
  @post("{id}")
  static createEqt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
