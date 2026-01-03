import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpks")
export default class LpkController {
  @operation({
    summary: "Get Lpks",
  })
  @get()
  static getLpks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpk",
  })
  @post("{id}")
  static createLpk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
