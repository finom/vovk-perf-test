import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("diis")
export default class DiiController {
  @operation({
    summary: "Get Diis",
  })
  @get()
  static getDiis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dii",
  })
  @post("{id}")
  static createDii = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
