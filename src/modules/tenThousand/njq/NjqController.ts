import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("njqs")
export default class NjqController {
  @operation({
    summary: "Get Njqs",
  })
  @get()
  static getNjqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Njq",
  })
  @post("{id}")
  static createNjq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
