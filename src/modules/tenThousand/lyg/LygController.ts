import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyg")
export default class LygController {
  @operation({
    summary: "Get Lyg",
  })
  @get()
  static getLyg = procedure({
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
