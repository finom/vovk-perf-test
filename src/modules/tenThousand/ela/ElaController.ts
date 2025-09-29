import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("elas")
export default class ElaController {
  @operation({
    summary: "Get Elas",
  })
  @get()
  static getElas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ela",
  })
  @post("{id}")
  static createEla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
