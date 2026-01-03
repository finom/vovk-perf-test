import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zjs")
export default class ZjController {
  @operation({
    summary: "Get Zjs",
  })
  @get()
  static getZjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zj",
  })
  @post("{id}")
  static createZj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
