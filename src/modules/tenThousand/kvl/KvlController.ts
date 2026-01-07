import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvl")
export default class KvlController {
  @operation({
    summary: "Get Kvl",
  })
  @get()
  static getKvl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvl",
  })
  @post("{id}")
  static createKvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
