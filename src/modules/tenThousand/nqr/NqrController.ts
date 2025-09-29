import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqrs")
export default class NqrController {
  @operation({
    summary: "Get Nqrs",
  })
  @get()
  static getNqrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqr",
  })
  @post("{id}")
  static createNqr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
