import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyf")
export default class LyfController {
  @operation({
    summary: "Get Lyf",
  })
  @get()
  static getLyf = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyf",
  })
  @post("{id}")
  static createLyf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
