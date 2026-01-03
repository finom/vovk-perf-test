import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqis")
export default class EqiController {
  @operation({
    summary: "Get Eqis",
  })
  @get()
  static getEqis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqi",
  })
  @post("{id}")
  static createEqi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
