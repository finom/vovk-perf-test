import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njns")
export default class NjnController {
  @operation({
    summary: "Get Njns",
  })
  @get()
  static getNjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njn",
  })
  @post("{id}")
  static createNjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
