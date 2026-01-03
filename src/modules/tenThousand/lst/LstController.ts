import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsts")
export default class LstController {
  @operation({
    summary: "Get Lsts",
  })
  @get()
  static getLsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lst",
  })
  @post("{id}")
  static createLst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
