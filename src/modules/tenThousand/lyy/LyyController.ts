import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyys")
export default class LyyController {
  @operation({
    summary: "Get Lyys",
  })
  @get()
  static getLyys = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyy",
  })
  @post("{id}")
  static createLyy = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
