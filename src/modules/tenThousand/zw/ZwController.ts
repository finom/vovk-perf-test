import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zw")
export default class ZwController {
  @operation({
    summary: "Get Zw",
  })
  @get()
  static getZw = procedure({
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
