import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jxl")
export default class JxlController {
  @operation({
    summary: "Get Jxl",
  })
  @get()
  static getJxl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jxl",
  })
  @post("{id}")
  static createJxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
