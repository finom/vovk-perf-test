import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cxvs")
export default class CxvController {
  @operation({
    summary: "Get Cxvs",
  })
  @get()
  static getCxvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cxv",
  })
  @post("{id}")
  static createCxv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
