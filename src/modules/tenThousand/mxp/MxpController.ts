import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mxps")
export default class MxpController {
  @operation({
    summary: "Get Mxps",
  })
  @get()
  static getMxps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mxp",
  })
  @post("{id}")
  static createMxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
