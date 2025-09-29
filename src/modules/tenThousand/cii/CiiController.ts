import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ciis")
export default class CiiController {
  @operation({
    summary: "Get Ciis",
  })
  @get()
  static getCiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cii",
  })
  @post("{id}")
  static createCii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
