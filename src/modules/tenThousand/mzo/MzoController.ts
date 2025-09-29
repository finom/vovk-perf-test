import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mzos")
export default class MzoController {
  @operation({
    summary: "Get Mzos",
  })
  @get()
  static getMzos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mzo",
  })
  @post("{id}")
  static createMzo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
