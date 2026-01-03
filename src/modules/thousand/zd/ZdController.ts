import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zds")
export default class ZdController {
  @operation({
    summary: "Get Zds",
  })
  @get()
  static getZds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zd",
  })
  @post("{id}")
  static createZd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
