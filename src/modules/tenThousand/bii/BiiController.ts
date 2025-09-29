import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("biis")
export default class BiiController {
  @operation({
    summary: "Get Biis",
  })
  @get()
  static getBiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bii",
  })
  @post("{id}")
  static createBii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
