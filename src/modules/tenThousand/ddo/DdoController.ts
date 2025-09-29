import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddos")
export default class DdoController {
  @operation({
    summary: "Get Ddos",
  })
  @get()
  static getDdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddo",
  })
  @post("{id}")
  static createDdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
