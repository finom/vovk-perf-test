import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nifs")
export default class NifController {
  @operation({
    summary: "Get Nifs",
  })
  @get()
  static getNifs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nif",
  })
  @post("{id}")
  static createNif = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
