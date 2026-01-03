import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wgs")
export default class WgController {
  @operation({
    summary: "Get Wgs",
  })
  @get()
  static getWgs = procedure({
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
