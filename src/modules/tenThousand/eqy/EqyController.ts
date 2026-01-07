import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eqy")
export default class EqyController {
  @operation({
    summary: "Get Eqy",
  })
  @get()
  static getEqy = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eqy",
  })
  @post("{id}")
  static createEqy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
