import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yb")
export default class YbController {
  @operation({
    summary: "Get Yb",
  })
  @get()
  static getYb = procedure({
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
