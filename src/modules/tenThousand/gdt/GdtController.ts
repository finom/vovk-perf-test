import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdts")
export default class GdtController {
  @operation({
    summary: "Get Gdts",
  })
  @get()
  static getGdts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdt",
  })
  @post("{id}")
  static createGdt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
