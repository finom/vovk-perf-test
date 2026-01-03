import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvzs")
export default class KvzController {
  @operation({
    summary: "Get Kvzs",
  })
  @get()
  static getKvzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvz",
  })
  @post("{id}")
  static createKvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
