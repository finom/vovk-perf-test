import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxl")
export default class GxlController {
  @operation({
    summary: "Get Gxl",
  })
  @get()
  static getGxl = procedure({
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
