import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzjs")
export default class LzjController {
  @operation({
    summary: "Get Lzjs",
  })
  @get()
  static getLzjs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzj",
  })
  @post("{id}")
  static createLzj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
