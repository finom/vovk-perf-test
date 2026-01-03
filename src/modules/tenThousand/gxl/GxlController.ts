import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxls")
export default class GxlController {
  @operation({
    summary: "Get Gxls",
  })
  @get()
  static getGxls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxl",
  })
  @post("{id}")
  static createGxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
