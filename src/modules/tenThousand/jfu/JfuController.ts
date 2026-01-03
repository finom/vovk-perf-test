import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfus")
export default class JfuController {
  @operation({
    summary: "Get Jfus",
  })
  @get()
  static getJfus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jfu",
  })
  @post("{id}")
  static createJfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
