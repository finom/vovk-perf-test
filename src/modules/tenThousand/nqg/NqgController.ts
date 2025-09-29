import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nqgs")
export default class NqgController {
  @operation({
    summary: "Get Nqgs",
  })
  @get()
  static getNqgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nqg",
  })
  @post("{id}")
  static createNqg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
