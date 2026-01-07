import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyq")
export default class LyqController {
  @operation({
    summary: "Get Lyq",
  })
  @get()
  static getLyq = procedure({
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
