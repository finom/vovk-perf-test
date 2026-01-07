import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lxl")
export default class LxlController {
  @operation({
    summary: "Get Lxl",
  })
  @get()
  static getLxl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lxl",
  })
  @post("{id}")
  static createLxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
