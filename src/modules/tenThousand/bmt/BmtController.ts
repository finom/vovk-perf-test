import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bmt")
export default class BmtController {
  @operation({
    summary: "Get Bmt",
  })
  @get()
  static getBmt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bmt",
  })
  @post("{id}")
  static createBmt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
