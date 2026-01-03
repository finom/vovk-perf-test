import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyns")
export default class LynController {
  @operation({
    summary: "Get Lyns",
  })
  @get()
  static getLyns = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyn",
  })
  @post("{id}")
  static createLyn = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
