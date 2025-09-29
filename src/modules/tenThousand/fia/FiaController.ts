import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fias")
export default class FiaController {
  @operation({
    summary: "Get Fias",
  })
  @get()
  static getFias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fia",
  })
  @post("{id}")
  static createFia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
