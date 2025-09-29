import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyis")
export default class LyiController {
  @operation({
    summary: "Get Lyis",
  })
  @get()
  static getLyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyi",
  })
  @post("{id}")
  static createLyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
