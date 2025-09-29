import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mhbs")
export default class MhbController {
  @operation({
    summary: "Get Mhbs",
  })
  @get()
  static getMhbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mhb",
  })
  @post("{id}")
  static createMhb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
