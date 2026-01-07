import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xt")
export default class XtController {
  @operation({
    summary: "Get Xt",
  })
  @get()
  static getXt = procedure({
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
