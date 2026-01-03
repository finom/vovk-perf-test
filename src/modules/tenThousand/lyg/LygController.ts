import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lygs")
export default class LygController {
  @operation({
    summary: "Get Lygs",
  })
  @get()
  static getLygs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyg",
  })
  @post("{id}")
  static createLyg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
