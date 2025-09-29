import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqjs")
export default class NqjController {
  @operation({
    summary: "Get Nqjs",
  })
  @get()
  static getNqjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqj",
  })
  @post("{id}")
  static createNqj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
