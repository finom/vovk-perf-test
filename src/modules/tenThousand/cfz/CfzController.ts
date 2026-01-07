import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfz")
export default class CfzController {
  @operation({
    summary: "Get Cfz",
  })
  @get()
  static getCfz = procedure({
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
