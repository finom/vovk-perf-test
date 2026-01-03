import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfzs")
export default class CfzController {
  @operation({
    summary: "Get Cfzs",
  })
  @get()
  static getCfzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfz",
  })
  @post("{id}")
  static createCfz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
