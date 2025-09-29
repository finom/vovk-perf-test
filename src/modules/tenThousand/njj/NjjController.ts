import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njjs")
export default class NjjController {
  @operation({
    summary: "Get Njjs",
  })
  @get()
  static getNjjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njj",
  })
  @post("{id}")
  static createNjj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
