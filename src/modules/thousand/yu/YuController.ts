import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yus")
export default class YuController {
  @operation({
    summary: "Get Yus",
  })
  @get()
  static getYus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yu",
  })
  @post("{id}")
  static createYu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
