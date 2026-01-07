import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqq")
export default class EqqController {
  @operation({
    summary: "Get Eqq",
  })
  @get()
  static getEqq = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqq",
  })
  @post("{id}")
  static createEqq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
