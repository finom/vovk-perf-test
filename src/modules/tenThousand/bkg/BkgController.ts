import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bkg")
export default class BkgController {
  @operation({
    summary: "Get Bkg",
  })
  @get()
  static getBkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bkg",
  })
  @post("{id}")
  static createBkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
