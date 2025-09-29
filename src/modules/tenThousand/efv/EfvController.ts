import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efvs")
export default class EfvController {
  @operation({
    summary: "Get Efvs",
  })
  @get()
  static getEfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efv",
  })
  @post("{id}")
  static createEfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
