import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lmts")
export default class LmtController {
  @operation({
    summary: "Get Lmts",
  })
  @get()
  static getLmts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lmt",
  })
  @post("{id}")
  static createLmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
