import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("tvs")
export default class TvController {
  @operation({
    summary: "Get Tvs",
  })
  @get()
  static getTvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Tv",
  })
  @post("{id}")
  static createTv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
