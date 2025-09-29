import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fufs")
export default class FufController {
  @operation({
    summary: "Get Fufs",
  })
  @get()
  static getFufs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fuf",
  })
  @post("{id}")
  static createFuf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
