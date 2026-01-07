import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxd")
export default class GxdController {
  @operation({
    summary: "Get Gxd",
  })
  @get()
  static getGxd = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxd",
  })
  @post("{id}")
  static createGxd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
