import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xg")
export default class XgController {
  @operation({
    summary: "Get Xg",
  })
  @get()
  static getXg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xg",
  })
  @post("{id}")
  static createXg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
