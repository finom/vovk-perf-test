import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("feos")
export default class FeoController {
  @operation({
    summary: "Get Feos",
  })
  @get()
  static getFeos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Feo",
  })
  @post("{id}")
  static createFeo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
