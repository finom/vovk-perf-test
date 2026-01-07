import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jgr")
export default class JgrController {
  @operation({
    summary: "Get Jgr",
  })
  @get()
  static getJgr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jgr",
  })
  @post("{id}")
  static createJgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
