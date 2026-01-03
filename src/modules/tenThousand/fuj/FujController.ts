import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fujs")
export default class FujController {
  @operation({
    summary: "Get Fujs",
  })
  @get()
  static getFujs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fuj",
  })
  @post("{id}")
  static createFuj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
