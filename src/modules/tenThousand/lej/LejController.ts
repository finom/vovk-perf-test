import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lejs")
export default class LejController {
  @operation({
    summary: "Get Lejs",
  })
  @get()
  static getLejs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lej",
  })
  @post("{id}")
  static createLej = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
