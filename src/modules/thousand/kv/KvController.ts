import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvs")
export default class KvController {
  @operation({
    summary: "Get Kvs",
  })
  @get()
  static getKvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kv",
  })
  @post("{id}")
  static createKv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
