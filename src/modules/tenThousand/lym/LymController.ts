import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyms")
export default class LymController {
  @operation({
    summary: "Get Lyms",
  })
  @get()
  static getLyms = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lym",
  })
  @post("{id}")
  static createLym = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
