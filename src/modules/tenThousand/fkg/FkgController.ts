import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fkg")
export default class FkgController {
  @operation({
    summary: "Get Fkg",
  })
  @get()
  static getFkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fkg",
  })
  @post("{id}")
  static createFkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
