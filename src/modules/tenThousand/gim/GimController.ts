import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gims")
export default class GimController {
  @operation({
    summary: "Get Gims",
  })
  @get()
  static getGims = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gim",
  })
  @post("{id}")
  static createGim = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
