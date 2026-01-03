import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cis")
export default class CiController {
  @operation({
    summary: "Get Cis",
  })
  @get()
  static getCis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ci",
  })
  @post("{id}")
  static createCi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
