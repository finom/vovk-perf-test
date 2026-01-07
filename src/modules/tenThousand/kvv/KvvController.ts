import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvv")
export default class KvvController {
  @operation({
    summary: "Get Kvv",
  })
  @get()
  static getKvv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvv",
  })
  @post("{id}")
  static createKvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
