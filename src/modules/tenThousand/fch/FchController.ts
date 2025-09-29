import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fches")
export default class FchController {
  @operation({
    summary: "Get Fches",
  })
  @get()
  static getFches = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fch",
  })
  @post("{id}")
  static createFch = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
