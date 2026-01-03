import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uws")
export default class UwController {
  @operation({
    summary: "Get Uws",
  })
  @get()
  static getUws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Uw",
  })
  @post("{id}")
  static createUw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
