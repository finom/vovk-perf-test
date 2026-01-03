import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfhs")
export default class CfhController {
  @operation({
    summary: "Get Cfhs",
  })
  @get()
  static getCfhs = procedure({
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
