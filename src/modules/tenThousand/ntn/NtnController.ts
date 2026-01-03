import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ntns")
export default class NtnController {
  @operation({
    summary: "Get Ntns",
  })
  @get()
  static getNtns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ntn",
  })
  @post("{id}")
  static createNtn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
