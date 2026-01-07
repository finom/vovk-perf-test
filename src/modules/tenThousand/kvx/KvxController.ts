import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvx")
export default class KvxController {
  @operation({
    summary: "Get Kvx",
  })
  @get()
  static getKvx = procedure({
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
