import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gls")
export default class GlsController {
  @operation({
    summary: "Get Gls",
  })
  @get()
  static getGls = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gls",
  })
  @post("{id}")
  static createGls = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
