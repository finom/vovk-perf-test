import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvs")
export default class KvsController {
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
    summary: "Create Kvs",
  })
  @post("{id}")
  static createKvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
