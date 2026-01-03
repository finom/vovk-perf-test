import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyqs")
export default class LyqController {
  @operation({
    summary: "Get Lyqs",
  })
  @get()
  static getLyqs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyq",
  })
  @post("{id}")
  static createLyq = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
