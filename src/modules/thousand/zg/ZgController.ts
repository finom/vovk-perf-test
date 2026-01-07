import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zg")
export default class ZgController {
  @operation({
    summary: "Get Zg",
  })
  @get()
  static getZg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zg",
  })
  @post("{id}")
  static createZg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
