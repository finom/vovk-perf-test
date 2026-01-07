import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lkg")
export default class LkgController {
  @operation({
    summary: "Get Lkg",
  })
  @get()
  static getLkg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lkg",
  })
  @post("{id}")
  static createLkg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
