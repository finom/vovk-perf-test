import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lzies")
export default class LzyController {
  @operation({
    summary: "Get Lzies",
  })
  @get()
  static getLzies = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lzy",
  })
  @post("{id}")
  static createLzy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
