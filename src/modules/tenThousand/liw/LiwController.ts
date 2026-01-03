import { procedure, prefix, get, post, operation } from "vovk";

@prefix("liws")
export default class LiwController {
  @operation({
    summary: "Get Liws",
  })
  @get()
  static getLiws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Liw",
  })
  @post("{id}")
  static createLiw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
