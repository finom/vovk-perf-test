import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cfjs")
export default class CfjController {
  @operation({
    summary: "Get Cfjs",
  })
  @get()
  static getCfjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cfj",
  })
  @post("{id}")
  static createCfj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
