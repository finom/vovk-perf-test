import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efu")
export default class EfuController {
  @operation({
    summary: "Get Efu",
  })
  @get()
  static getEfu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Efu",
  })
  @post("{id}")
  static createEfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
