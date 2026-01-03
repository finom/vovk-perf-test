import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqzs")
export default class EqzController {
  @operation({
    summary: "Get Eqzs",
  })
  @get()
  static getEqzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqz",
  })
  @post("{id}")
  static createEqz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
