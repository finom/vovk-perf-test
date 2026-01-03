import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfks")
export default class CfkController {
  @operation({
    summary: "Get Cfks",
  })
  @get()
  static getCfks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfk",
  })
  @post("{id}")
  static createCfk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
