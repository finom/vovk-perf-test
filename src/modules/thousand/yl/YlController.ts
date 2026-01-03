import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yls")
export default class YlController {
  @operation({
    summary: "Get Yls",
  })
  @get()
  static getYls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yl",
  })
  @post("{id}")
  static createYl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
