import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hfus")
export default class HfuController {
  @operation({
    summary: "Get Hfus",
  })
  @get()
  static getHfus = procedure({
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
