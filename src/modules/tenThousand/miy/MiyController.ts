import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("miys")
export default class MiyController {
  @operation({
    summary: "Get Miys",
  })
  @get()
  static getMiys = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Miy",
  })
  @post("{id}")
  static createMiy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
