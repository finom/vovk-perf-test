import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxg")
export default class HxgController {
  @operation({
    summary: "Get Hxg",
  })
  @get()
  static getHxg = procedure({
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
