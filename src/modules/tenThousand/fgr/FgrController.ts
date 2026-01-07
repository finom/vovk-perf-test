import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgr")
export default class FgrController {
  @operation({
    summary: "Get Fgr",
  })
  @get()
  static getFgr = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fgr",
  })
  @post("{id}")
  static createFgr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
