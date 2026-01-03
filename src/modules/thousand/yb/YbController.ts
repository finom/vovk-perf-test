import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ybs")
export default class YbController {
  @operation({
    summary: "Get Ybs",
  })
  @get()
  static getYbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yb",
  })
  @post("{id}")
  static createYb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
