import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxm")
export default class GxmController {
  @operation({
    summary: "Get Gxm",
  })
  @get()
  static getGxm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxm",
  })
  @post("{id}")
  static createGxm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
