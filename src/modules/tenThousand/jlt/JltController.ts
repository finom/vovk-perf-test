import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlts")
export default class JltController {
  @operation({
    summary: "Get Jlts",
  })
  @get()
  static getJlts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jlt",
  })
  @post("{id}")
  static createJlt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
