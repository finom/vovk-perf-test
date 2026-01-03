import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpvs")
export default class MpvController {
  @operation({
    summary: "Get Mpvs",
  })
  @get()
  static getMpvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpv",
  })
  @post("{id}")
  static createMpv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
