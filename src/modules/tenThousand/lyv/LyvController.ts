import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyvs")
export default class LyvController {
  @operation({
    summary: "Get Lyvs",
  })
  @get()
  static getLyvs = procedure({
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
