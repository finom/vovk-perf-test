import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fras")
export default class FraController {
  @operation({
    summary: "Get Fras",
  })
  @get()
  static getFras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fra",
  })
  @post("{id}")
  static createFra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
