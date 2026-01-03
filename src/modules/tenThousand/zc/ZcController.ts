import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zcs")
export default class ZcController {
  @operation({
    summary: "Get Zcs",
  })
  @get()
  static getZcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zc",
  })
  @post("{id}")
  static createZc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
