import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxgs")
export default class HxgController {
  @operation({
    summary: "Get Hxgs",
  })
  @get()
  static getHxgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxg",
  })
  @post("{id}")
  static createHxg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
