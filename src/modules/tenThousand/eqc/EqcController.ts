import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqc")
export default class EqcController {
  @operation({
    summary: "Get Eqc",
  })
  @get()
  static getEqc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqc",
  })
  @post("{id}")
  static createEqc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
