import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksts")
export default class KstController {
  @operation({
    summary: "Get Ksts",
  })
  @get()
  static getKsts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kst",
  })
  @post("{id}")
  static createKst = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
