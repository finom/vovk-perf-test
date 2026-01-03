import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gxps")
export default class GxpController {
  @operation({
    summary: "Get Gxps",
  })
  @get()
  static getGxps = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gxp",
  })
  @post("{id}")
  static createGxp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
