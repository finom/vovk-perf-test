import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqj")
export default class EqjController {
  @operation({
    summary: "Get Eqj",
  })
  @get()
  static getEqj = procedure({
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
