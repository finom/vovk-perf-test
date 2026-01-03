import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqls")
export default class EqlController {
  @operation({
    summary: "Get Eqls",
  })
  @get()
  static getEqls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eql",
  })
  @post("{id}")
  static createEql = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
