import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lrcs")
export default class LrcController {
  @operation({
    summary: "Get Lrcs",
  })
  @get()
  static getLrcs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lrc",
  })
  @post("{id}")
  static createLrc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
