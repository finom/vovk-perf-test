import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cdds")
export default class CddController {
  @operation({
    summary: "Get Cdds",
  })
  @get()
  static getCdds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cdd",
  })
  @post("{id}")
  static createCdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
