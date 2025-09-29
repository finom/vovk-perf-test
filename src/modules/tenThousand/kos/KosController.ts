import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kos")
export default class KosController {
  @operation({
    summary: "Get Kos",
  })
  @get()
  static getKos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kos",
  })
  @post("{id}")
  static createKos = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
