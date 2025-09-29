import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foxen")
export default class FoxController {
  @operation({
    summary: "Get Foxen",
  })
  @get()
  static getFoxen = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fox",
  })
  @post("{id}")
  static createFox = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
