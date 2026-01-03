import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxvs")
export default class GxvController {
  @operation({
    summary: "Get Gxvs",
  })
  @get()
  static getGxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxv",
  })
  @post("{id}")
  static createGxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
