import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdos")
export default class KdoController {
  @operation({
    summary: "Get Kdos",
  })
  @get()
  static getKdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdo",
  })
  @post("{id}")
  static createKdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
