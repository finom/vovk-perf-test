import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzw")
export default class LzwController {
  @operation({
    summary: "Get Lzw",
  })
  @get()
  static getLzw = procedure({
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
