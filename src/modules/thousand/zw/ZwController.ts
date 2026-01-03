import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zws")
export default class ZwController {
  @operation({
    summary: "Get Zws",
  })
  @get()
  static getZws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zw",
  })
  @post("{id}")
  static createZw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
