import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyrs")
export default class LyrController {
  @operation({
    summary: "Get Lyrs",
  })
  @get()
  static getLyrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyr",
  })
  @post("{id}")
  static createLyr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
