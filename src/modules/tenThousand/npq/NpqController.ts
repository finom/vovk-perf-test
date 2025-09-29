import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npqs")
export default class NpqController {
  @operation({
    summary: "Get Npqs",
  })
  @get()
  static getNpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npq",
  })
  @post("{id}")
  static createNpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
