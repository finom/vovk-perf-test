import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zls")
export default class ZlController {
  @operation({
    summary: "Get Zls",
  })
  @get()
  static getZls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zl",
  })
  @post("{id}")
  static createZl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
