import { procedure, prefix, get, post, operation } from "vovk";

@prefix("xjs")
export default class XjController {
  @operation({
    summary: "Get Xjs",
  })
  @get()
  static getXjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Xj",
  })
  @post("{id}")
  static createXj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
