import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwzs")
export default class GwzController {
  @operation({
    summary: "Get Gwzs",
  })
  @get()
  static getGwzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwz",
  })
  @post("{id}")
  static createGwz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
