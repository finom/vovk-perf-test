import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzh")
export default class LzhController {
  @operation({
    summary: "Get Lzh",
  })
  @get()
  static getLzh = procedure({
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
