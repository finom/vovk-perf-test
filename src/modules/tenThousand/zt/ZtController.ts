import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zts")
export default class ZtController {
  @operation({
    summary: "Get Zts",
  })
  @get()
  static getZts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zt",
  })
  @post("{id}")
  static createZt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
