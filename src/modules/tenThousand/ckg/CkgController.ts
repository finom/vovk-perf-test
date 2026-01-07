import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckg")
export default class CkgController {
  @operation({
    summary: "Get Ckg",
  })
  @get()
  static getCkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ckg",
  })
  @post("{id}")
  static createCkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
