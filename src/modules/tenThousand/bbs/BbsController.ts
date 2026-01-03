import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bbs")
export default class BbsController {
  @operation({
    summary: "Get Bbs",
  })
  @get()
  static getBbs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bbs",
  })
  @post("{id}")
  static createBbs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
