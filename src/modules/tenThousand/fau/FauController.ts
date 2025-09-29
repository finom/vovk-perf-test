import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("faus")
export default class FauController {
  @operation({
    summary: "Get Faus",
  })
  @get()
  static getFaus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fau",
  })
  @post("{id}")
  static createFau = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
