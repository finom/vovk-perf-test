import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyu")
export default class LyuController {
  @operation({
    summary: "Get Lyu",
  })
  @get()
  static getLyu = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyu",
  })
  @post("{id}")
  static createLyu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
