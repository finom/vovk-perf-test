import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fmts")
export default class FmtController {
  @operation({
    summary: "Get Fmts",
  })
  @get()
  static getFmts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fmt",
  })
  @post("{id}")
  static createFmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
