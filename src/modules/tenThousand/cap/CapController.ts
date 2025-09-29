import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("caps")
export default class CapController {
  @operation({
    summary: "Get Caps",
  })
  @get()
  static getCaps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cap",
  })
  @post("{id}")
  static createCap = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
