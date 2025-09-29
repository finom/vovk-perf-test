import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("moxen")
export default class MoxController {
  @operation({
    summary: "Get Moxen",
  })
  @get()
  static getMoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mox",
  })
  @post("{id}")
  static createMox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
