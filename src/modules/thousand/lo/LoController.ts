import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("los")
export default class LoController {
  @operation({
    summary: "Get Los",
  })
  @get()
  static getLos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lo",
  })
  @post("{id}")
  static createLo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
