import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gnos")
export default class GnoController {
  @operation({
    summary: "Get Gnos",
  })
  @get()
  static getGnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gno",
  })
  @post("{id}")
  static createGno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
