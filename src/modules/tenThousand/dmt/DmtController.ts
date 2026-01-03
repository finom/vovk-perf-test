import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmts")
export default class DmtController {
  @operation({
    summary: "Get Dmts",
  })
  @get()
  static getDmts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dmt",
  })
  @post("{id}")
  static createDmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
