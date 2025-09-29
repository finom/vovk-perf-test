import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djas")
export default class DjaController {
  @operation({
    summary: "Get Djas",
  })
  @get()
  static getDjas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dja",
  })
  @post("{id}")
  static createDja = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
