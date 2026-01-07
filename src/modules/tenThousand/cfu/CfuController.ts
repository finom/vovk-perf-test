import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfu")
export default class CfuController {
  @operation({
    summary: "Get Cfu",
  })
  @get()
  static getCfu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfu",
  })
  @post("{id}")
  static createCfu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
