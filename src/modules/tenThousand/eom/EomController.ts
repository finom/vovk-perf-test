import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eoms")
export default class EomController {
  @operation({
    summary: "Get Eoms",
  })
  @get()
  static getEoms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eom",
  })
  @post("{id}")
  static createEom = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
