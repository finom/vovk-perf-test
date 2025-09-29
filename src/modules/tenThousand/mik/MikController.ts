import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("miks")
export default class MikController {
  @operation({
    summary: "Get Miks",
  })
  @get()
  static getMiks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mik",
  })
  @post("{id}")
  static createMik = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
