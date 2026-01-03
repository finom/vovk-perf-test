import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgrs")
export default class KgrController {
  @operation({
    summary: "Get Kgrs",
  })
  @get()
  static getKgrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kgr",
  })
  @post("{id}")
  static createKgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
