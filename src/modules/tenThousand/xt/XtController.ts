import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xts")
export default class XtController {
  @operation({
    summary: "Get Xts",
  })
  @get()
  static getXts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xt",
  })
  @post("{id}")
  static createXt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
