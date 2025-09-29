import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bzos")
export default class BzoController {
  @operation({
    summary: "Get Bzos",
  })
  @get()
  static getBzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bzo",
  })
  @post("{id}")
  static createBzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
