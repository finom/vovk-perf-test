import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvt")
export default class KvtController {
  @operation({
    summary: "Get Kvt",
  })
  @get()
  static getKvt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvt",
  })
  @post("{id}")
  static createKvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
