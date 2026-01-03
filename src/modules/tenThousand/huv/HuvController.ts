import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huvs")
export default class HuvController {
  @operation({
    summary: "Get Huvs",
  })
  @get()
  static getHuvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Huv",
  })
  @post("{id}")
  static createHuv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
