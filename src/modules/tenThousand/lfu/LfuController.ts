import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lfus")
export default class LfuController {
  @operation({
    summary: "Get Lfus",
  })
  @get()
  static getLfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lfu",
  })
  @post("{id}")
  static createLfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
