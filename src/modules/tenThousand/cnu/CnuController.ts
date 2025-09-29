import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cnus")
export default class CnuController {
  @operation({
    summary: "Get Cnus",
  })
  @get()
  static getCnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cnu",
  })
  @post("{id}")
  static createCnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
