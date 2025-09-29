import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("liis")
export default class LiiController {
  @operation({
    summary: "Get Liis",
  })
  @get()
  static getLiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lii",
  })
  @post("{id}")
  static createLii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
