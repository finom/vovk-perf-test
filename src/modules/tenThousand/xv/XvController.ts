import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xvs")
export default class XvController {
  @operation({
    summary: "Get Xvs",
  })
  @get()
  static getXvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xv",
  })
  @post("{id}")
  static createXv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
