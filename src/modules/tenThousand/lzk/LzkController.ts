import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzks")
export default class LzkController {
  @operation({
    summary: "Get Lzks",
  })
  @get()
  static getLzks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzk",
  })
  @post("{id}")
  static createLzk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
