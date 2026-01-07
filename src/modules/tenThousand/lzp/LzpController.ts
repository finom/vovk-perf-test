import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzp")
export default class LzpController {
  @operation({
    summary: "Get Lzp",
  })
  @get()
  static getLzp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzp",
  })
  @post("{id}")
  static createLzp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
