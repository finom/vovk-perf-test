import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdos")
export default class BdoController {
  @operation({
    summary: "Get Bdos",
  })
  @get()
  static getBdos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdo",
  })
  @post("{id}")
  static createBdo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
