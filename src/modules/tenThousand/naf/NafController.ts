import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nafs")
export default class NafController {
  @operation({
    summary: "Get Nafs",
  })
  @get()
  static getNafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Naf",
  })
  @post("{id}")
  static createNaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
