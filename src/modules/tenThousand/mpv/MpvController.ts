import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpv")
export default class MpvController {
  @operation({
    summary: "Get Mpv",
  })
  @get()
  static getMpv = procedure({
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
