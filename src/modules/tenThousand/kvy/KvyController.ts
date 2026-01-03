import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvies")
export default class KvyController {
  @operation({
    summary: "Get Kvies",
  })
  @get()
  static getKvies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvy",
  })
  @post("{id}")
  static createKvy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
