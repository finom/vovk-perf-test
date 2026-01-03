import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dyds")
export default class DydController {
  @operation({
    summary: "Get Dyds",
  })
  @get()
  static getDyds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dyd",
  })
  @post("{id}")
  static createDyd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
