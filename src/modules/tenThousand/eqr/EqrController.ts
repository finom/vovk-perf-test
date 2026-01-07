import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqr")
export default class EqrController {
  @operation({
    summary: "Get Eqr",
  })
  @get()
  static getEqr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqr",
  })
  @post("{id}")
  static createEqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
