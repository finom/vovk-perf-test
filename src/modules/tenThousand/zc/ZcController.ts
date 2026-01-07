import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zc")
export default class ZcController {
  @operation({
    summary: "Get Zc",
  })
  @get()
  static getZc = procedure({
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
