import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgos")
export default class CgoController {
  @operation({
    summary: "Get Cgos",
  })
  @get()
  static getCgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgo",
  })
  @post("{id}")
  static createCgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
