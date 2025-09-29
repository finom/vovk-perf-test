import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dnis")
export default class DniController {
  @operation({
    summary: "Get Dnis",
  })
  @get()
  static getDnis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dni",
  })
  @post("{id}")
  static createDni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
