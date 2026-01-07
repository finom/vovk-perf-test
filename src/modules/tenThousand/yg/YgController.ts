import { procedure, prefix, get, post, operation } from "vovk";

@prefix("yg")
export default class YgController {
  @operation({
    summary: "Get Yg",
  })
  @get()
  static getYg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Yg",
  })
  @post("{id}")
  static createYg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
