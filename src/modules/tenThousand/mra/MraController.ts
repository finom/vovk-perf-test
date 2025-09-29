import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mras")
export default class MraController {
  @operation({
    summary: "Get Mras",
  })
  @get()
  static getMras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mra",
  })
  @post("{id}")
  static createMra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
