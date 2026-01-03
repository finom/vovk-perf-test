import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zbs")
export default class ZbController {
  @operation({
    summary: "Get Zbs",
  })
  @get()
  static getZbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zb",
  })
  @post("{id}")
  static createZb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
