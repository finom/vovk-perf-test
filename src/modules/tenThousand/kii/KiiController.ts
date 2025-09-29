import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kiis")
export default class KiiController {
  @operation({
    summary: "Get Kiis",
  })
  @get()
  static getKiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kii",
  })
  @post("{id}")
  static createKii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
