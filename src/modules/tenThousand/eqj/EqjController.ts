import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqjs")
export default class EqjController {
  @operation({
    summary: "Get Eqjs",
  })
  @get()
  static getEqjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqj",
  })
  @post("{id}")
  static createEqj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
