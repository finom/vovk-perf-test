import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvps")
export default class KvpController {
  @operation({
    summary: "Get Kvps",
  })
  @get()
  static getKvps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvp",
  })
  @post("{id}")
  static createKvp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
