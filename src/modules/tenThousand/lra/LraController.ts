import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lras")
export default class LraController {
  @operation({
    summary: "Get Lras",
  })
  @get()
  static getLras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lra",
  })
  @post("{id}")
  static createLra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
