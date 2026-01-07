import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyv")
export default class LyvController {
  @operation({
    summary: "Get Lyv",
  })
  @get()
  static getLyv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyv",
  })
  @post("{id}")
  static createLyv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
