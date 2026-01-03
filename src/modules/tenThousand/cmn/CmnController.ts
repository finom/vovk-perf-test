import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmns")
export default class CmnController {
  @operation({
    summary: "Get Cmns",
  })
  @get()
  static getCmns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmn",
  })
  @post("{id}")
  static createCmn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
