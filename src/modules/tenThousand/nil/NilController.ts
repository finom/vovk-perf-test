import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nils")
export default class NilController {
  @operation({
    summary: "Get Nils",
  })
  @get()
  static getNils = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nil",
  })
  @post("{id}")
  static createNil = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
