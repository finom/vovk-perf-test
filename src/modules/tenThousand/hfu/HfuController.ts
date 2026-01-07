import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfu")
export default class HfuController {
  @operation({
    summary: "Get Hfu",
  })
  @get()
  static getHfu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hfu",
  })
  @post("{id}")
  static createHfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
