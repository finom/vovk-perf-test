import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("npps")
export default class NppController {
  @operation({
    summary: "Get Npps",
  })
  @get()
  static getNpps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Npp",
  })
  @post("{id}")
  static createNpp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
