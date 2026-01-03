import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfqs")
export default class CfqController {
  @operation({
    summary: "Get Cfqs",
  })
  @get()
  static getCfqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfq",
  })
  @post("{id}")
  static createCfq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
