import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqg")
export default class EqgController {
  @operation({
    summary: "Get Eqg",
  })
  @get()
  static getEqg = procedure({
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
