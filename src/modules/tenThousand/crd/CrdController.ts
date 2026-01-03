import { procedure, prefix, get, post, operation } from "vovk";

@prefix("crds")
export default class CrdController {
  @operation({
    summary: "Get Crds",
  })
  @get()
  static getCrds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Crd",
  })
  @post("{id}")
  static createCrd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
