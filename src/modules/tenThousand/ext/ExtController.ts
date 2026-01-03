import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exts")
export default class ExtController {
  @operation({
    summary: "Get Exts",
  })
  @get()
  static getExts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ext",
  })
  @post("{id}")
  static createExt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
