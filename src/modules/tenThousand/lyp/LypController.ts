import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyp")
export default class LypController {
  @operation({
    summary: "Get Lyp",
  })
  @get()
  static getLyp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyp",
  })
  @post("{id}")
  static createLyp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
