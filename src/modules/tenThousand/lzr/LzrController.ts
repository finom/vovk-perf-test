import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzrs")
export default class LzrController {
  @operation({
    summary: "Get Lzrs",
  })
  @get()
  static getLzrs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzr",
  })
  @post("{id}")
  static createLzr = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
