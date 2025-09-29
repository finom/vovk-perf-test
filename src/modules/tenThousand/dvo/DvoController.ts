import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dvos")
export default class DvoController {
  @operation({
    summary: "Get Dvos",
  })
  @get()
  static getDvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dvo",
  })
  @post("{id}")
  static createDvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
