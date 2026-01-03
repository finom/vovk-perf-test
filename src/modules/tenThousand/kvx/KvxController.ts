import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvxes")
export default class KvxController {
  @operation({
    summary: "Get Kvxes",
  })
  @get()
  static getKvxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvx",
  })
  @post("{id}")
  static createKvx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
