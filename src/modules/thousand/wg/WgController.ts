import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wg")
export default class WgController {
  @operation({
    summary: "Get Wg",
  })
  @get()
  static getWg = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Wg",
  })
  @post("{id}")
  static createWg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
