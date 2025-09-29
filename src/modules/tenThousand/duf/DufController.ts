import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dufs")
export default class DufController {
  @operation({
    summary: "Get Dufs",
  })
  @get()
  static getDufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duf",
  })
  @post("{id}")
  static createDuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
