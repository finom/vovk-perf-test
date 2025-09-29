import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("deos")
export default class DeoController {
  @operation({
    summary: "Get Deos",
  })
  @get()
  static getDeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Deo",
  })
  @post("{id}")
  static createDeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
