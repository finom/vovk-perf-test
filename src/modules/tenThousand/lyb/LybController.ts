import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyb")
export default class LybController {
  @operation({
    summary: "Get Lyb",
  })
  @get()
  static getLyb = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyb",
  })
  @post("{id}")
  static createLyb = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
