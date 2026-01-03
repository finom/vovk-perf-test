import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jbms")
export default class JbmController {
  @operation({
    summary: "Get Jbms",
  })
  @get()
  static getJbms = procedure({
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
