import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyc")
export default class LycController {
  @operation({
    summary: "Get Lyc",
  })
  @get()
  static getLyc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyc",
  })
  @post("{id}")
  static createLyc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
