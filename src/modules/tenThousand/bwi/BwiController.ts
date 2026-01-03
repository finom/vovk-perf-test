import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bwis")
export default class BwiController {
  @operation({
    summary: "Get Bwis",
  })
  @get()
  static getBwis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Bwi",
  })
  @post("{id}")
  static createBwi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
