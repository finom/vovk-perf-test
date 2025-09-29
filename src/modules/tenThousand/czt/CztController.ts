import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czts")
export default class CztController {
  @operation({
    summary: "Get Czts",
  })
  @get()
  static getCzts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czt",
  })
  @post("{id}")
  static createCzt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
