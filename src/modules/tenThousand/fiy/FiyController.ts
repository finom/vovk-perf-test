import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fiys")
export default class FiyController {
  @operation({
    summary: "Get Fiys",
  })
  @get()
  static getFiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fiy",
  })
  @post("{id}")
  static createFiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
