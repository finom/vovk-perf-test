import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mmt")
export default class MmtController {
  @operation({
    summary: "Get Mmt",
  })
  @get()
  static getMmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mmt",
  })
  @post("{id}")
  static createMmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
