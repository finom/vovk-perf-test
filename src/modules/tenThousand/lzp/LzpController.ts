import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzps")
export default class LzpController {
  @operation({
    summary: "Get Lzps",
  })
  @get()
  static getLzps = procedure({
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
