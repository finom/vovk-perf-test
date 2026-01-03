import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kvws")
export default class KvwController {
  @operation({
    summary: "Get Kvws",
  })
  @get()
  static getKvws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Kvw",
  })
  @post("{id}")
  static createKvw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
