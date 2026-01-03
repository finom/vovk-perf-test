import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxls")
export default class MxlController {
  @operation({
    summary: "Get Mxls",
  })
  @get()
  static getMxls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxl",
  })
  @post("{id}")
  static createMxl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
