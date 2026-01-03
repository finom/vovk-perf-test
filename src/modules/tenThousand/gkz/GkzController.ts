import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gkzs")
export default class GkzController {
  @operation({
    summary: "Get Gkzs",
  })
  @get()
  static getGkzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gkz",
  })
  @post("{id}")
  static createGkz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
