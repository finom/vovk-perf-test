import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnos")
export default class CnoController {
  @operation({
    summary: "Get Cnos",
  })
  @get()
  static getCnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cno",
  })
  @post("{id}")
  static createCno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
