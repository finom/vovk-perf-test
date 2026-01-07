import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzb")
export default class LzbController {
  @operation({
    summary: "Get Lzb",
  })
  @get()
  static getLzb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzb",
  })
  @post("{id}")
  static createLzb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
