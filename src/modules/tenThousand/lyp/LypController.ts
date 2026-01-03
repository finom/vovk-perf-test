import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyps")
export default class LypController {
  @operation({
    summary: "Get Lyps",
  })
  @get()
  static getLyps = procedure({
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
