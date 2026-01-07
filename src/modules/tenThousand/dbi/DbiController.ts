import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dbi")
export default class DbiController {
  @operation({
    summary: "Get Dbi",
  })
  @get()
  static getDbi = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dbi",
  })
  @post("{id}")
  static createDbi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
