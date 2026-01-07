import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbm")
export default class JbmController {
  @operation({
    summary: "Get Jbm",
  })
  @get()
  static getJbm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jbm",
  })
  @post("{id}")
  static createJbm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
