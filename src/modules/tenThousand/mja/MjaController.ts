import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mjas")
export default class MjaController {
  @operation({
    summary: "Get Mjas",
  })
  @get()
  static getMjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mja",
  })
  @post("{id}")
  static createMja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
