import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("flos")
export default class FloController {
  @operation({
    summary: "Get Flos",
  })
  @get()
  static getFlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Flo",
  })
  @post("{id}")
  static createFlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
