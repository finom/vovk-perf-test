import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cmts")
export default class CmtController {
  @operation({
    summary: "Get Cmts",
  })
  @get()
  static getCmts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cmt",
  })
  @post("{id}")
  static createCmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
