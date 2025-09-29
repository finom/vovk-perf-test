import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njus")
export default class NjuController {
  @operation({
    summary: "Get Njus",
  })
  @get()
  static getNjus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nju",
  })
  @post("{id}")
  static createNju = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
