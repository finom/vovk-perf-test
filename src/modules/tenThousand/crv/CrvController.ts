import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crvs")
export default class CrvController {
  @operation({
    summary: "Get Crvs",
  })
  @get()
  static getCrvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crv",
  })
  @post("{id}")
  static createCrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
