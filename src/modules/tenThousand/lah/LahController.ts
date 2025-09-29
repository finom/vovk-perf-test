import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lahs")
export default class LahController {
  @operation({
    summary: "Get Lahs",
  })
  @get()
  static getLahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lah",
  })
  @post("{id}")
  static createLah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
