import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqrs")
export default class EqrController {
  @operation({
    summary: "Get Eqrs",
  })
  @get()
  static getEqrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqr",
  })
  @post("{id}")
  static createEqr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
