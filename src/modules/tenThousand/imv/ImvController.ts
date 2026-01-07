import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imv")
export default class ImvController {
  @operation({
    summary: "Get Imv",
  })
  @get()
  static getImv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Imv",
  })
  @post("{id}")
  static createImv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
