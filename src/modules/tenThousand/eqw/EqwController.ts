import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqw")
export default class EqwController {
  @operation({
    summary: "Get Eqw",
  })
  @get()
  static getEqw = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqw",
  })
  @post("{id}")
  static createEqw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
