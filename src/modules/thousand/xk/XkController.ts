import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xks")
export default class XkController {
  @operation({
    summary: "Get Xks",
  })
  @get()
  static getXks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xk",
  })
  @post("{id}")
  static createXk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
