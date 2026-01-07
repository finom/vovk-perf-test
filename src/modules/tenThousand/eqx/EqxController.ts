import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqx")
export default class EqxController {
  @operation({
    summary: "Get Eqx",
  })
  @get()
  static getEqx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqx",
  })
  @post("{id}")
  static createEqx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
