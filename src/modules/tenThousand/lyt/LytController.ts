import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyts")
export default class LytController {
  @operation({
    summary: "Get Lyts",
  })
  @get()
  static getLyts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyt",
  })
  @post("{id}")
  static createLyt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
