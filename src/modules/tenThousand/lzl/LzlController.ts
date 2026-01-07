import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzl")
export default class LzlController {
  @operation({
    summary: "Get Lzl",
  })
  @get()
  static getLzl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzl",
  })
  @post("{id}")
  static createLzl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
