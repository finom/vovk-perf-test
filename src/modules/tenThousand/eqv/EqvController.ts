import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqv")
export default class EqvController {
  @operation({
    summary: "Get Eqv",
  })
  @get()
  static getEqv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqv",
  })
  @post("{id}")
  static createEqv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
