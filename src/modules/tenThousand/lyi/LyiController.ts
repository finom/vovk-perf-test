import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lyis")
export default class LyiController {
  @operation({
    summary: "Get Lyis",
  })
  @get()
  static getLyis = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lyi",
  })
  @post("{id}")
  static createLyi = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
