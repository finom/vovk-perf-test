import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("meos")
export default class MeoController {
  @operation({
    summary: "Get Meos",
  })
  @get()
  static getMeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Meo",
  })
  @post("{id}")
  static createMeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
