import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fts")
export default class FtController {
  @operation({
    summary: "Get Fts",
  })
  @get()
  static getFts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ft",
  })
  @post("{id}")
  static createFt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
