import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdos")
export default class FdoController {
  @operation({
    summary: "Get Fdos",
  })
  @get()
  static getFdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdo",
  })
  @post("{id}")
  static createFdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
