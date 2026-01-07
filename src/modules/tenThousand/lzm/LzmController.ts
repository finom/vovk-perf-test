import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzm")
export default class LzmController {
  @operation({
    summary: "Get Lzm",
  })
  @get()
  static getLzm = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzm",
  })
  @post("{id}")
  static createLzm = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
