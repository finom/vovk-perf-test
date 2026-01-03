import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzhs")
export default class LzhController {
  @operation({
    summary: "Get Lzhs",
  })
  @get()
  static getLzhs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzh",
  })
  @post("{id}")
  static createLzh = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
