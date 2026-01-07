import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvn")
export default class KvnController {
  @operation({
    summary: "Get Kvn",
  })
  @get()
  static getKvn = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvn",
  })
  @post("{id}")
  static createKvn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
