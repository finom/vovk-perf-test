import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crv")
export default class CrvController {
  @operation({
    summary: "Get Crv",
  })
  @get()
  static getCrv = procedure({
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
