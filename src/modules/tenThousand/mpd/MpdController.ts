import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mpds")
export default class MpdController {
  @operation({
    summary: "Get Mpds",
  })
  @get()
  static getMpds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mpd",
  })
  @post("{id}")
  static createMpd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
