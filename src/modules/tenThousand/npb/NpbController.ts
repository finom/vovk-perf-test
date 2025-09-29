import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npbs")
export default class NpbController {
  @operation({
    summary: "Get Npbs",
  })
  @get()
  static getNpbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npb",
  })
  @post("{id}")
  static createNpb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
