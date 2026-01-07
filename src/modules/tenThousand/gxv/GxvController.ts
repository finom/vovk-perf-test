import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxv")
export default class GxvController {
  @operation({
    summary: "Get Gxv",
  })
  @get()
  static getGxv = procedure({
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
