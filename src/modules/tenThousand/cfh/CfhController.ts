import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfh")
export default class CfhController {
  @operation({
    summary: "Get Cfh",
  })
  @get()
  static getCfh = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfh",
  })
  @post("{id}")
  static createCfh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
