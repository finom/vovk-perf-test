import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzws")
export default class LzwController {
  @operation({
    summary: "Get Lzws",
  })
  @get()
  static getLzws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzw",
  })
  @post("{id}")
  static createLzw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
