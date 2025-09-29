import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nnus")
export default class NnuController {
  @operation({
    summary: "Get Nnus",
  })
  @get()
  static getNnus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nnu",
  })
  @post("{id}")
  static createNnu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
