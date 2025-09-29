import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njfs")
export default class NjfController {
  @operation({
    summary: "Get Njfs",
  })
  @get()
  static getNjfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njf",
  })
  @post("{id}")
  static createNjf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
