import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxrs")
export default class GxrController {
  @operation({
    summary: "Get Gxrs",
  })
  @get()
  static getGxrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxr",
  })
  @post("{id}")
  static createGxr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
