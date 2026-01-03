import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzfs")
export default class LzfController {
  @operation({
    summary: "Get Lzfs",
  })
  @get()
  static getLzfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzf",
  })
  @post("{id}")
  static createLzf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
