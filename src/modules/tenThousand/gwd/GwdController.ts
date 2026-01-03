import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwds")
export default class GwdController {
  @operation({
    summary: "Get Gwds",
  })
  @get()
  static getGwds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gwd",
  })
  @post("{id}")
  static createGwd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
