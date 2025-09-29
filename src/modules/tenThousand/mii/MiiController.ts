import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("miis")
export default class MiiController {
  @operation({
    summary: "Get Miis",
  })
  @get()
  static getMiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mii",
  })
  @post("{id}")
  static createMii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
