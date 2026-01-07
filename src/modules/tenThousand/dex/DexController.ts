import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dex")
export default class DexController {
  @operation({
    summary: "Get Dex",
  })
  @get()
  static getDex = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dex",
  })
  @post("{id}")
  static createDex = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
