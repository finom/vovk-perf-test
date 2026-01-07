import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zt")
export default class ZtController {
  @operation({
    summary: "Get Zt",
  })
  @get()
  static getZt = procedure({
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
