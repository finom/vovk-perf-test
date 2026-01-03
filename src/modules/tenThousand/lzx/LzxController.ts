import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzxes")
export default class LzxController {
  @operation({
    summary: "Get Lzxes",
  })
  @get()
  static getLzxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzx",
  })
  @post("{id}")
  static createLzx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
