import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hxls")
export default class HxlController {
  @operation({
    summary: "Get Hxls",
  })
  @get()
  static getHxls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Hxl",
  })
  @post("{id}")
  static createHxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
