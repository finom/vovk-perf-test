import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npjs")
export default class NpjController {
  @operation({
    summary: "Get Npjs",
  })
  @get()
  static getNpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npj",
  })
  @post("{id}")
  static createNpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
