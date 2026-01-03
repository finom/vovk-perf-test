import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyxes")
export default class LyxController {
  @operation({
    summary: "Get Lyxes",
  })
  @get()
  static getLyxes = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyx",
  })
  @post("{id}")
  static createLyx = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
