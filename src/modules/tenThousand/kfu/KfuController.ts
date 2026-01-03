import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kfus")
export default class KfuController {
  @operation({
    summary: "Get Kfus",
  })
  @get()
  static getKfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kfu",
  })
  @post("{id}")
  static createKfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
