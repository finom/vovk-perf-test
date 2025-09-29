import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnos")
export default class FnoController {
  @operation({
    summary: "Get Fnos",
  })
  @get()
  static getFnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fno",
  })
  @post("{id}")
  static createFno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
