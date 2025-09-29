import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fiis")
export default class FiiController {
  @operation({
    summary: "Get Fiis",
  })
  @get()
  static getFiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fii",
  })
  @post("{id}")
  static createFii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
