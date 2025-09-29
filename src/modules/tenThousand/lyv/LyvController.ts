import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lyvs")
export default class LyvController {
  @operation({
    summary: "Get Lyvs",
  })
  @get()
  static getLyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lyv",
  })
  @post("{id}")
  static createLyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
