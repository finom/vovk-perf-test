import { procedure, prefix, get, post, operation } from "vovk";

@prefix("zx")
export default class ZxController {
  @operation({
    summary: "Get Zx",
  })
  @get()
  static getZx = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Zx",
  })
  @post("{id}")
  static createZx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
