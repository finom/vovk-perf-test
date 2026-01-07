import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fb")
export default class FbController {
  @operation({
    summary: "Get Fb",
  })
  @get()
  static getFb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fb",
  })
  @post("{id}")
  static createFb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
