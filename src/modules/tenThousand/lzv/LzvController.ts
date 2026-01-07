import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzv")
export default class LzvController {
  @operation({
    summary: "Get Lzv",
  })
  @get()
  static getLzv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzv",
  })
  @post("{id}")
  static createLzv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
