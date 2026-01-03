import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxns")
export default class HxnController {
  @operation({
    summary: "Get Hxns",
  })
  @get()
  static getHxns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxn",
  })
  @post("{id}")
  static createHxn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
