import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyj")
export default class LyjController {
  @operation({
    summary: "Get Lyj",
  })
  @get()
  static getLyj = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyj",
  })
  @post("{id}")
  static createLyj = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
