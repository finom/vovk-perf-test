import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqfs")
export default class EqfController {
  @operation({
    summary: "Get Eqfs",
  })
  @get()
  static getEqfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqf",
  })
  @post("{id}")
  static createEqf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
