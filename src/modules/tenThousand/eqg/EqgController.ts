import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqgs")
export default class EqgController {
  @operation({
    summary: "Get Eqgs",
  })
  @get()
  static getEqgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqg",
  })
  @post("{id}")
  static createEqg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
