import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqqs")
export default class EqqController {
  @operation({
    summary: "Get Eqqs",
  })
  @get()
  static getEqqs = procedure({
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
